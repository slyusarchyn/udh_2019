<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

/**
 * Class CreateFeaturesTable
 */
class CreateFeaturesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('features', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('layer_id');
            $table->string('name');
            $table->string('full_name');
            $table->string('sidc');
            $table->string('command');
            $table->tinyInteger('type');
            $table->timestamps();
            $table->softDeletes();

            $table->foreign('layer_id')->references('id')->on('layers')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('features');
    }
}
