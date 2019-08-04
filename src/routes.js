import React,{Component} from 'react';
import {Route,Switch} from 'react-router-dom'
import Home  from './components/Home/home'
import Videos  from './components/Videos/videos'
import News  from './components/News/news'
import Layout from './hoc/Layout/layout'

export default class Routes extends Component {
    render() {
        return (
           <Layout>
               <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/news" exact component={News}/>
                    <Route path="/videos" exact component={Videos}/>
               </Switch>
           </Layout>
           
        )
    }
}
