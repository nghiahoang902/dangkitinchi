<?php

namespace App\Http\Controllers;

use App\Http\Resources\SectionClassResource;
use App\Models\PsClass;
use Illuminate\Http\Request;

class PsSectionClassController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {   
        $user = $request->user;
        return $user;
        $sectionClass = PsClass::where('is_type', 1)
            ->with('sectionClassChilds')
            ->where('is_activated', 1)
            ->where('parent_id', null)
            ->get();
        
        if (!$sectionClass) {
            return response()->json([
                'message' => 'Không tìm thấy lớp học phần!'
            ], 404);
        }
        
        $sectionClassChilds = SectionClassResource::collection($sectionClass);

        return response()->json([
            'data' => $sectionClassChilds
        ], 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
