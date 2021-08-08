import { Avatar } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'
import "./Sidebar.css"

function Sidebar() {
    const user = useSelector(selectUser)
    const recentItem = (topic) =>(
        <div className="sidebar_recentItem">
            <span className="sidebar_hash">#</span>
            <p>{topic}</p>
        </div>
    )
    return (
        <div className="sidebar">
            <div className="sidebar_top">
                <img src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-1.2.1&ixid=MXwxMjA3fDBBMHxleHBsb3JllWZlZWR8MXx8fGVufD88fHw%#D&w=1000q=88" alt="" />
                <Avatar className="sidebar_avatar" src={user.photoUrl} >{user.email[0]}</Avatar>    
                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>
            </div>
            <div className="sidebar_stats">
                <div className="sidebar_stat">
                    <p>Who viewed you</p>
                    <p className="sidebar_statfigure">2,000</p>
                </div>
                <div className="sidebar_stat">
                    <p>Views on post</p>
                    <p className="sidebar_statfigure">2,448</p>
                </div>
            </div>
            <div className="sidebar_bottom">
              <p>Recent</p>  
              {recentItem('reactjs')}
              {recentItem('cloud computing')}
              {recentItem('software engineering')}
              {recentItem('ui/ux design')}
              {recentItem('coding')}
            </div>
        </div>
    )
}

export default Sidebar
