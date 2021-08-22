<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\State;

class StateController extends Controller
{
    public function getState() {
        return (string) State::find(1);
    }

    public function setState(Request $request) {
        $state = State::find(1);
        $state->fill($request->all())->save();
        return response()->json(['status' => 200]);
    }
}
