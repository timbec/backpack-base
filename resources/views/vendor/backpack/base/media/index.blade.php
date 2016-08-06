@extends('backpack::layout')

@section('content')

   <h1>Media</h1>

   @if($photos)
   <table class="table">
      <thead>
         <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Created At</th>
         </tr>
      </thead>
      @foreach($photos as $photo)
      <tbody>
         <tr>
            <td>{{ $photo->id }}</td>
            <td><img height="50" src="{{ $photo->file ? $photo->file : 'no photo'}}" /></td>
            <td>{{ $photo->created_at ? $photo->created_at->diffForHumans() : 'no date'  }}</td>
            <td>
            {!! Form::open(['method'=>'DELETE','action'=>['AdminControllers\MediaController@destroy', $photo->id]]) !!}


                    <div class="form-group">
                       {!! Form::submit('Delete Image', ['class'=>'btn btn-primary btn-danger']) !!}
                    </div>

                 {!! Form::close() !!}
            </td>
         </tr>
      </tbody>
      @endforeach
   </table>

   @endif

@stop
