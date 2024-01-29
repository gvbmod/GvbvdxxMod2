import React, { Component } from 'react';
import Box from '../components/box/box.jsx';
import Modal from '../containers/modal.jsx';
import styles from './gm2-custom-extension.css';
import {defineMessages, FormattedMessage, intlShape, injectIntl} from 'react-intl';

function readAsTextAsync (blob) {
	return new Promise((accept, reject) => {
		try{
			var reader = new FileReader();
			
			reader.onload = function () {
				accept(reader.result);
			};
			
			reader.onerror = reject;
			
			reader.readAsText(blob);
		}catch(e){
			reject(e);
		}
	})
};

class GM2CustomExtension extends Component {
	constructor(props) {
		super(props);
		this.vm = window.vm || window.LatestVirtualMachine;
		this.toURLMenu = this.toURLMenu.bind(this);
		this.toJSMenu = this.toJSMenu.bind(this);
		this.addExtension = this.addExtension.bind(this);
	}
	
	state = {urlMenu:true,jsMenu:false,isError:false}
	
	toURLMenu = function(){
		if (!this.state.urlMenu) {
			this.setState({urlMenu:true,jsMenu:false,isError:false,fileMenu:false});
		}
	}
	
	toJSMenu = function(){
		if (!this.state.jsMenu) {
			this.setState({urlMenu:false,jsMenu:true,isError:false,fileMenu:false});
		}
	}
	
	toFileMenu = function(){
		if (!this.state.fileMenu) {
			this.setState({urlMenu:false,jsMenu:false,isError:false,fileMenu:true});
		}
	}
	
	
	addExtension = async function(){
		if (this.state.jsMenu) {
			try{
				var input = document.getElementById("gm2-js-ext");
				window.onExtensionExitButtonClick();
				this.vm.extensionManager.addTWExtensionJS(input.value);
			}catch(e){
				console.error(e);
				this.setState({urlMenu:false,jsMenu:false,isError:true});
			}
		}
		if (this.state.urlMenu) {
			var input = document.getElementById("gm2-url-ext");
			try{
				await this.vm.extensionManager.addTWExtensionURL(input.value);
				window.onExtensionExitButtonClick();
			}catch(e){
				console.error(e);
				this.setState({urlMenu:false,jsMenu:false,isError:true});
			}
		}
		if (this.state.fileMenu) {
			var input = document.getElementById("gm2importfile");
			try{
				var text = await readAsTextAsync(input.files[0]);
				await this.vm.extensionManager.addTWExtensionJS(text);
				window.onExtensionExitButtonClick();
			}catch(e){
				console.error(e);
				this.setState({urlMenu:false,jsMenu:false,isError:true});
			}
		}
	}
	
	render() {
		return (
			<Modal
			className={styles.modalContent}
			onRequestClose={
				function () {
					window.onExtensionExitButtonClick();
				}
			}
			contentLabel={"Add an custom extension"}
			id="customExtensionModal"
		>
			<Box
				className={styles.body}
			>
				{ (!this.state.isError) && <div>
						<b>WARNING:</b><br/>
						<p>
							Using extensions that you do not trust can cause your device to get hacked, <br/>
							remember Gvbvdxx Mod 2 and Turbowarp are not responsible for any damage to your <br/>
							device.
						</p><br/>
						{
							(!this.state.urlMenu) &&
							<button className={styles.button} onClick={() => this.toURLMenu()}>
								URL
							</button>
						}
						{
							(this.state.urlMenu) &&
							<button className={styles.selectedButton}>
								URL
							</button>
						}
						{
							(!this.state.jsMenu) &&
							<button className={styles.button} onClick={() => this.toJSMenu()}>
								JavaScript
							</button>
						}
						{
							(this.state.jsMenu) &&
							<button className={styles.selectedButton}>
								JavaScript
							</button>
						}
						{
							(!this.state.fileMenu) &&
							<button className={styles.button} onClick={() => this.toFileMenu()}>
								File
							</button>
						}
						{
							(this.state.fileMenu) &&
							<button className={styles.selectedButton}>
								File
							</button>
						}
						<hr/>
						{this.state.urlMenu &&
						(<div>
						<b>Import from URL:</b>
						<br/>
						<input
							type={"text"}
							onChange={function(){}}
							defaultValue={"https://extensions.turbowarp.org/stretch.js"}
							id="gm2-url-ext"
						/>
						<br/>
						
						</div>)
						}
						{this.state.jsMenu &&
						(<div>
						<b>Import using javascript language:</b>
						<br/>
						<textarea onChange={function(){}} defaultValue={"(function (Scratch) {\n//Do something...\n})(Scratch);"} id="gm2-js-ext"/>
						</div>)
						}
						{this.state.fileMenu &&
						(<div>
							<b>Import using a file:</b><br/>
							<input type={"file"} id={"gm2importfile"} accept=".js"/>
						</div>)
						}
						 <button className={styles.button} onClick={() => this.addExtension()}>
							Import Extension
						</button>
					</div>
				}
				{ this.state.isError && <div>
						<h1>There was an error loading the extension.</h1><br/>
						<h2>Try:</h2>
						<p>
							* Do you have a file selected? - Make sure you select a file if you chose the "import from file" option.
						</p><br/>
						<p>
							* Making sure you have an internet connection. - If your loading the extension over an url.
						</p><br/>
						<p>
							* Does this url have CORS? - Make sure the extension is set to be Cross Origin, otherwise it may not work.
						</p><br/>
						<p>
							* Your using a old or outdated extension. - Try to get the recent version or, fix it yourself.
						</p><br/>
						<p>
							* An extension that was poorly programed. - Try to fix it yourself, or contact the person that made the extension.
						</p><br/>
						<p>
							* You made the extension. - Navigate to your developer console and try debugging it there.
						</p><br/>
						 <button className={styles.button} onClick={() => this.toURLMenu()}>
							OK
						</button>
					</div>
				}
			</Box>
		</Modal>
    );
  }
}


export default GM2CustomExtension;
