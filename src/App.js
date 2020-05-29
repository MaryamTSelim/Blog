import React, { useState, useEffect } from 'react';
import { Switch, Route, Redirect, useHistory } from 'react-router-dom';
import axios from "axios";
//Sass
import './App.scss';
//Components
import Header from './Components/Header/Header';
import Home from './Pages/Home/Home';
import Blog from './Pages/Blog/Blog';
import Sign from './Pages/Sign/Sign';
import Error from './Pages/Error/Error';
import BlogView from './Components/Blog-View/Blog-View';
import Account from './Pages/Account/Account';
import AddBlog from './Pages/AddBlog/AddBlog';

function App() {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [logged, setLogged] = useState(false);
  const [currentBlogId, setCurrentBlogId] = useState(0);
  const [displayedUserId, setDisplayedUserId] = useState(0);
  const [isEditing, setIsEditing] = useState(false);
  let history = useHistory();
  const GetPosts = async () => {
    const temp = await axios.get("http://localhost:5000/post/");
    setPosts(temp.data);
  }
  const GetUsers = async () => {
    const temp = await axios.get("http://localhost:5000/user/");
    setUsers(temp.data);
  }

  useEffect(() => {
    GetUsers();
    GetPosts();
  }, []);

  const toggleFollow = (id) => {
    if (currentUser.following.filter(f => f === id).length !== 0) {
      //unfollow
      let newUser = currentUser;
      newUser.following.pop(id);
      console.log(newUser)
      axios.put(`http://localhost:5000/user/${currentUser._id}`, JSON.stringify(newUser), { headers: { "Content-Type": "application/json" } }).then(res => {
        setUsers(res.data)
        setCurrentUser(res.data.filter(u => u._id === newUser._id)[0]);
      })

    }
    else {
      //follow
      let newUser = currentUser;
      newUser.following.push(id);
      console.log(newUser)
      axios.put(`http://localhost:5000/user/${currentUser._id}`, JSON.stringify(newUser), { headers: { "Content-Type": "application/json" } }).then(res => {
        setUsers(res.data)
        setCurrentUser(res.data.filter(u => u._id === newUser._id)[0]);
      })

    }
  }
  const login = (user) => {
    setCurrentUser(user);
    setDisplayedUserId(user._id)
    setLogged(true)
  }
  const signup = (name, username, password) => {
    axios.post("http://localhost:5000/user/",
      {
        "name": name,
        "imgURL": "",
        "username": username,
        "password": password
      })
      .then(res => {
        setUsers(res.data)
        setCurrentUser(res.data[res.data.length - 1]);
        setDisplayedUserId(res.data[res.data.length - 1]._id)
        setLogged(true)
        history.push("/account");
      })
  }
  const openBlog = (id) => {
    setCurrentBlogId(id)
    history.push("/view")
  }
  const handleFilteration = (value) => {
    if (value.length !== 0) {
      const re = new RegExp(value);
      const temp = posts.filter(b => b.title.toLowerCase().match(re) != null);
      console.log(temp)
      setPosts(temp);
    } else {
      GetPosts()
      GetUsers()
    }

  }
  const openAccount = (id) => {
    setDisplayedUserId(id)
    history.push("/account")
  }
  const deleteBlog = (id) => {
    history.push("/blog");
    axios.delete(`http://localhost:5000/post/${id}`).then(res => {
      setPosts(res.data)
    })
  }
  const saveEditing = (title, tags, blog) => {
    let newBlog = posts.filter(f => f._id === currentBlogId)[0];
    newBlog.title = title;
    newBlog.tags = tags;
    newBlog.body = blog
    axios.put(`http://localhost:5000/post/${currentBlogId}`, JSON.stringify(newBlog), { headers: { "Content-Type": "application/json" } }).then(res => {
      console.log(res.data)
      setPosts(res.data)
    })
  }
  const addBlogInvoker = () => {
    history.push("/addBlog")
  }
  const addBlogHandler = (title, tags, blog) => {
    axios.post("http://localhost:5000/post/",
      {
        "title": title,
        "imgURL": "",
        "tags": tags,
        "body": blog,
        "userId": currentUser._id
      })
      .then(res => {
        setPosts(res.data)
        console.log(res.data)
        history.push("/account");
      })
  }
  const cancelAddBlog = () => {
    history.push("/account");
  }

  return (
    <div className="App">
      <Header logged={logged} currentUser={currentUser} handleFilteration={handleFilteration}
        currentBlogId={currentBlogId} openAccount={openAccount} />
      <Switch>
        <Route exact path="/">
          <Home posts={posts} users={users} openBlog={openBlog} />
        </Route>
        <Route path="/account">
          {logged ? <Account blogs={posts} users={users}
            currentUser={currentUser} id={displayedUserId} openAccount={openAccount}
            toggleFollow={toggleFollow} openBlog={openBlog}
            addBlogInvoker={addBlogInvoker} /> : <Redirect to="/sign" />}
        </Route>
        <Route path="/sign">
          <Sign signup={signup} login={login} history={history} users={users} />
        </Route>
        <Route path="/blog" >
          <Blog posts={posts} users={users} openBlog={openBlog} />
        </Route>
        <Route path="/view"   >
          <BlogView blogs={posts} users={users} currentUser={currentUser} id={currentBlogId}
            openAccount={openAccount} deleteBlog={deleteBlog} isEditing={isEditing}
            setIsEditing={setIsEditing} saveEditing={saveEditing} />
        </Route>
        <Route path="/addBlog">
          <AddBlog cancelAddBlog={cancelAddBlog} addBlogHandler={addBlogHandler} />
        </Route>
        <Route path="/error">
          <Error />
        </Route>
        <Redirect to="/error" />
      </Switch>
      <div className="col-12 footer">maryamtselim@gmail.com</div>
    </div>
  );
}

export default App;
