<?php

Route::group(['prefix' => 'auth'], function () {
    Route::post('login', 'Api\Auth\AuthController@login');
    Route::post('logout', 'Api\Auth\AuthController@logout');
    Route::post('register', 'Api\Auth\AuthController@register');
    Route::post('refresh', 'Api\Auth\AuthController@refresh');
    Route::post('me', 'Api\Auth\AuthController@me');
});

Route::group(['middleware' => 'jwt.auth'], function () {
    Route::group(['prefix' => 'maps'], function () {
        Route::get('/', 'Api\MapController@getMaps');
        Route::post('/', 'Api\MapController@store');
        Route::get('/{id}', 'Api\MapController@show');
        Route::delete('/{id}', 'Api\MapController@destroy');

        Route::group(['prefix' => 'layers'], function () {
            Route::post('/', 'Api\LayerController@store');

            Route::group(['prefix' => 'markers'], function() {
                Route::post('/', 'Api\FeatureController@store');
                Route::delete('/{id}', 'Api\FeatureController@destroy');
            });
        });
    });
});
