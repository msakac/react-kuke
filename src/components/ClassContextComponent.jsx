// import React, {Component} from 'react';

// export default class ClassContenxtComponent extends Component{
//     themeStyles(dark){
//         return {
//             backgroundColor: dark ? '#333' : '#CCC',
//             color: dark ? '#333' : '#CCC',
//             padding: '2rem',
//             margin: '2rem'
//         }
//     }

//     render(){
//         return (
//             <ThemeContext.Consumer>
//                 {darkTheme => {
//                     return <div style={this.themeStyles(darkTheme)}>Class Theme</div>
//                 }}
//             </ThemeContext.Consumer>
//         )
//     }
// }