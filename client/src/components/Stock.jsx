import React from 'react';
import ReactDOM from 'react-dom';
import StocksList from './StocksList.jsx';
import IndividualStore from './IndividualStore.jsx';
class Stock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      drawer: 'drawer',
      individual: null,
      clicked: false
    };
    this.closeTab = this.closeTab.bind(this);
    this.openTab = this.openTab.bind(this);
    this.individualPage = this.individualPage.bind(this);
    this.return = this.return.bind(this);
  }
  closeTab () {
    this.setState({drawer: 'drawer', clicked:false});
  }
  openTab () {
    this.setState({drawer: 'drawer open'});
  }
  individualPage(store){
    console.log(store);
    this.setState({individual: store, clicked: true});
  }
  return(){
    this.setState({clicked:false});
  }
  render() {
    if(this.state.clicked === false) {
    return (
      <div className ={"stock_zip box"}>
        <div className={"stock_zip box zip"}>
          <div className={"stock_zip truck"}>
        <svg width="100%" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M1 4H16V7.00001L19.0246 7L23.0039 12.6848V18H20.3472C19.9254 19.3056 18.6999 20.25 17.2539 20.25C15.8079 20.25 14.5824 19.3056 14.1607 18H10.2563C9.83456 19.3056 8.60911 20.25 7.16309 20.25C5.71707 20.25 4.49161 19.3056 4.06984 18H1V4ZM4.06984 16C4.49161 14.6944 5.71707 13.75 7.16309 13.75C8.60911 13.75 9.83456 14.6944 10.2563 16H14V6H3V16H4.06984ZM16 14.0007C16.3858 13.8392 16.8095 13.75 17.2539 13.75C18.6999 13.75 19.9254 14.6944 20.3472 16H21.0039V13.3152L17.9833 9L16 9.00001V14.0007ZM7.16309 15.75C6.47273 15.75 5.91309 16.3096 5.91309 17C5.91309 17.6904 6.47273 18.25 7.16309 18.25C7.85344 18.25 8.41309 17.6904 8.41309 17C8.41309 16.3096 7.85344 15.75 7.16309 15.75ZM17.2539 15.75C16.5635 15.75 16.0039 16.3096 16.0039 17C16.0039 17.6904 16.5635 18.25 17.2539 18.25C17.9443 18.25 18.5039 17.6904 18.5039 17C18.5039 16.3096 17.9443 15.75 17.2539 15.75Z"></path> </svg>
        </div>
        Available for delivery in select locations
        </div>
        <div className={"stock_zip box stock"} onClick={this.openTab}>
        <div className={"stock_zip storefront"}>
          <svg width="100%" viewBox="0 0 24 24">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M22 20V4H2V20H22ZM20 6H4V18H7V10H17V18H20V6ZM11 12H9V18H11V12ZM13 18H15V12H13V18Z"></path>
          </svg>
        </div>
        Check Stores for product
        </div>
        <div className={this.state.drawer}>
          <div className={'exit'}>
            <div className={'exit button'} onClick={this.closeTab}>X</div>
          </div>
          <div className={'stock list box'}>
          <div className={'search'}>
          Find and pick up at your local IKEA store
          <form>
            <input className={'search form'} placeholder="Search ZipCode"/>
          </form>
          </div>
          <div>
          {this.props.stores.map (store =>
          <StocksList store={store} clicked={this.individualPage}/>)}
          </div>
        </div>
        </div>
      </div>
    );
  } else if(this.state.clicked === true) {
    return (
      <div className ={"stock_zip box"}>
        <div className={"stock_zip box zip"}>
        <div className={"stock_zip truck"}>
        <svg width="100%" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M1 4H16V7.00001L19.0246 7L23.0039 12.6848V18H20.3472C19.9254 19.3056 18.6999 20.25 17.2539 20.25C15.8079 20.25 14.5824 19.3056 14.1607 18H10.2563C9.83456 19.3056 8.60911 20.25 7.16309 20.25C5.71707 20.25 4.49161 19.3056 4.06984 18H1V4ZM4.06984 16C4.49161 14.6944 5.71707 13.75 7.16309 13.75C8.60911 13.75 9.83456 14.6944 10.2563 16H14V6H3V16H4.06984ZM16 14.0007C16.3858 13.8392 16.8095 13.75 17.2539 13.75C18.6999 13.75 19.9254 14.6944 20.3472 16H21.0039V13.3152L17.9833 9L16 9.00001V14.0007ZM7.16309 15.75C6.47273 15.75 5.91309 16.3096 5.91309 17C5.91309 17.6904 6.47273 18.25 7.16309 18.25C7.85344 18.25 8.41309 17.6904 8.41309 17C8.41309 16.3096 7.85344 15.75 7.16309 15.75ZM17.2539 15.75C16.5635 15.75 16.0039 16.3096 16.0039 17C16.0039 17.6904 16.5635 18.25 17.2539 18.25C17.9443 18.25 18.5039 17.6904 18.5039 17C18.5039 16.3096 17.9443 15.75 17.2539 15.75Z"></path> </svg>
        </div>
          Available for delivery in select locations
        </div>
        <div className={"stock_zip box stock"} onClick={this.openTab}>
        <div className={"stock_zip storefront"}>
          <svg width="100%" viewBox="0 0 24 24">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M22 20V4H2V20H22ZM20 6H4V18H7V10H17V18H20V6ZM11 12H9V18H11V12ZM13 18H15V12H13V18Z"></path>
          </svg>
        </div>
          Check Stores for product
        </div>
        <div className={this.state.drawer}>
          <div className={'exit'}>
            <div className={'exit button'} onClick={this.closeTab}>X</div>
          </div>
            {<IndividualStore store={this.state.individual} product={this.props.product} callback={this.return}/>}
        </div>
      </div>
    );
  }
  }
}
export default Stock;