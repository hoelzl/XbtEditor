
app.controller('EditorController',[ '$scope', "$modal", function($scope,  $modal) {
	

    $scope.editor = {
    		// ng-click Callbacks
            //
            // Open the FileOpenDialog and let the user select a new file for open
    		//
    		fileOpen: function(){
    		    var modalInstance = $modal.open({
    		      templateUrl:'src/controllers/FileOpenController.html',
    		      controller: 'FileOpenController'
    		    });
    		    
    		    modalInstance.result.then(
    		        // [OK]
    		    	function (content) {
    		    	    $scope.editor.load(content);
	    		    }, 
	    		    // [Cancel]
	    		    function () {
	    		        
	    		    }
	    	   );
    		},
    		//------------------------------------------------------------------------
    		
    		
    		// Configuration of the editor
    		//
    		// 
            canvas: {
                // callback if a DOM node from the palette is dropped inside the canvas
                //
                onDrop: function(droppedDomNode, x, y, shiftKey, ctrlKey){
                    var type = $(droppedDomNode).data("shape");
                    var figure = eval("new "+type+"();");
                    // create a command for the undo/redo support
                    var command = new draw2d.command.CommandAdd(this, figure, x, y);
                    this.getCommandStack().execute(command);
                }
            },
 
            // provide all figurs to show in the left hand palette
            // Used by the directrives/canvas.js
            palette: {
                    figures: [
                        {class: "xbtEditor.Start", name: "Start"},
                        {class: "xbtEditor.Choice", name: "Choice"},
                        {class: "xbtEditor.Sequence", name: "Sequence"},
                        {class: "xbtEditor.Task", name: "Task"}
                    ]
            },

        // Utility functions
        selectionType: function() {
            var s = $scope.editor.selection;
            switch (s.className) {
                case "xbtEditor.Start": return "Start";
                case "xbtEditor.Choice": return "Choice";
                case "xbtEditor.Sequence": return "Sequence";
                case "xbtEditor.Task": return "Task";
                default: return "";
            }
        }
    };
}]);