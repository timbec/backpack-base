<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/wins', function() {
   $cody = ['name' => 'Cody', 'wins' => 20];
   $angel = ['name' => 'Lucky Angel', 'wins' => 8 ];
   return view('pages.wins', compact('cody', 'angel'));
});

//Admin routes
Route::group(['middleware' => 'admin'], function() {

   Route::resource('admin/posts', 'AdminControllers\PostsController');
});
