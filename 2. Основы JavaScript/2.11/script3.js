// task 8 
if (-1 || 0) alert( 'first' ); // выполнится -1 - true, -> -1
if (-1 && 0) alert( 'second' ); // не выполнится, -> 0 - это false, поэтому alert не выполнится
if (null || -1 && 1) alert( 'third' ); // выполнится, -1 && 1 - это true, null || 1 -> 1 