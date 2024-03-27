<template>
    <div class="navbar-container">
        <ul class="nav nav-pills">
            <li><img src="../assets/toolist.png" class="logo-image"></li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Workspace</a>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li><a class="dropdown-item" href="#">Another action</a></li>
                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Recent</a>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li><a class="dropdown-item" href="#">Another action</a></li>
                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Starred</a>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li><a class="dropdown-item" href="#">Another action</a></li>
                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Templates</a>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li><a class="dropdown-item" href="#">Another action</a></li>
                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
            </li>
            <div class="logout-container">
                <li>
                    <a class="nav-link" href="/login" role="button" aria-expanded="false">Logout</a>
                </li>
            </div>
        </ul>
    </div>
</template>

<script>
import { useRoute } from 'vue-router';
</script>

<style>
.navbar-container {
    position: fixed;
    top: 0;
    width: 100%;
    background-color: #696868;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    z-index: 1000;
}

.nav-pills {
    display: flex;
    justify-content: flex-start;
    padding: 10px;
    list-style: none;
    margin: 0;
}

.nav-item {
    margin-right: 10px;
}

.nav-link {
    color: #ffffff;
    text-decoration: none;
    padding: 8px 15px;
    border-radius: 5px;
    transition: background-color 0.3s ease;
}

.nav-link:hover {
    background-color: #ffffff;
}

.logout-container {
    margin-left: auto;
    text-decoration: none;
    border-radius: 5px;
    transition: background-color 0.3s ease;
}

.logout-container:hover .nav-link{
    color: white !important;
    background-color: rgb(101, 101, 226) !important;
}

.dropdown-toggle::after {
    display: inline-block;
    margin-left: 5px;
    vertical-align: 0.25em;
    content: "";
    border-top: 0.3em solid;
    border-right: 0.3em solid transparent;
    border-bottom: 0;
    border-left: 0.3em solid transparent;
}

.dropdown-menu {
    display: none;
    position: absolute;
    z-index: 1000;
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
}

.nav-item:hover .dropdown-menu {
    display: block;
}

.dropdown-item {
    color: #333;
    padding: 8px 15px;
    text-decoration: none;
    display: block;
    transition: background-color 0.3s ease;
}

.dropdown-item:hover {
    background-color: #f5f5f5;
}

.logo-image {
    height: 40px;
    margin-right: 20px;
}
</style>