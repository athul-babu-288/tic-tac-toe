$(function () {
    $("#hid").hide();
    $("#sumit").click(function () {
        
        $("#sho").hide();
        $("#hid").fadeIn();
        var tyc = $("#pl1").val() + " Vs " + $("#pl2").val();
        $("#ply1").html(tyc);
    });
});

$(function () {
    var flag = 1, pl;
    var win;
    var m = [[3, 3, 3], [3, 3, 3], [3, 3, 3]];
    $(".tik").click(function () {
        var e = $(this).attr("rel");
        var t = e.split("#");
        if((m[t[0]][t[1]]!=1)||(m[t[0]][t[1]]!=2)){
        if (flag == 1) {
            m[t[0]][t[1]] = 1;
            $(this).attr("src", "assets/cross.png");
            pl = 1
            flag = 2;
        } else {
            m[t[0]][t[1]] = 2;
            $(this).attr("src", "assets/zero.png");
            pl = 2;
            flag = 1;
        }
         main_ck(t[0], t[1], pl);
    }

       
    });
    function main_ck(p1, p2, player) {
        var ii, jj, c = 0, inc, dcr;
        /*****************FUNCTIONS*************************/
        function top_diag() {
            for (ii = 0; ii < 3; ii++) {
                if (m[ii][ii] == player)
                    c++;
            }
        }

        function horizon() {
            inc = 0;
            c = 0;
            for (ii = 0; ii < 3; ii++) {
                if (m[p1][inc] == player)
                    c++;
                inc++;
            }
        }

        function vert() {
            inc = 0;
            c = 0;
            for (ii = 0; ii < 3; ii++) {
                if (m[inc][p2] == player)
                    c++;
                inc++;
            }
        }
        function off_diag() {
            dcr = 2;
            inc = 0;
            c = 0;
            for (ii = 0; ii < 3; ii++) {
                if (m[inc][dcr] == player)
                    c++;
                dcr--;
                inc++;
            }
        }
        /*****************************************/
        if ((p1 == 1) && (p2 == 1)) {
            top_diag()
            if (c != 3)
                horizon();
            if (c != 3)
                vert();
            if (c != 3)
                off_diag();
        }

        else if (p1 == p2) {
            top_diag()
            if (c != 3)
                horizon();
            if (c != 3)
                vert();
        }
        else if (((p1 == 0) && (p2 == 2)) || ((p1 == 2) && (p2 == 0))) {
            off_diag();
            if (c != 3)
                horizon();
            if (c != 3)
                vert();
        }
        else {
            horizon();
            if (c != 3)
                vert();
        }
        /*****************************************/
        if (c == 3) {
            $("#myModal").modal();
            if (player == 1)
                player = $("#pl1").val();
            else
                player = $("#pl2").val();
            $("#con").html(player + " Won The Match !");
// alert(player);
        } else {
            var tyu = 0;
            for (ii = 0; ii < 3; ii++) {
                for (jj = 0; jj < 3; jj++) {
                    if (m[ii][jj] == 3)
                        tyu++;
                }
            }
            if (tyu == 0) {
                $("#con").html("This match is a draw !");
                $("#myModal").modal();
            }
        }
    }
});

