/*
 *  jQuery table2excel - v1.1.2
 *  jQuery plugin to export an .xls file in browser from an HTML table
 *  https://github.com/rainabba/jquery-table2excel
 *
 *  Made by rainabba
 *  Under MIT License
 */
//table2excel.js
(function ($, window, document, undefined) {
    var pluginName = "table2excel",

        defaults = {
            exclude: ".versi-table",
            exclude_judul: true,
            // exclude_ttd: true,
            name: "Table2Excel",
            sheetName: "script_syahandrianeda",
            filename: "table2excel",
            fileext: ".xlsx",
            exclude_img: true,
            exclude_links: true,
            exclude_inputs: true,
            preserveColors: false,
            jumlahheader: 1,
            barisatas: 4,
            tabelmana: 21
        };

    // The actual plugin constructor
    function Plugin(element, options) {
        this.element = element;
        // jQuery has an extend method which merges the contents of two or
        // more objects, storing the result in the first object. The first object
        // is generally empty as we don't want to alter the default options for
        // future instances of the plugin
        //
        this.settings = $.extend({}, defaults, options);
        this._defaults = defaults;
        this._name = pluginName;
        this.init();
    }

    Plugin.prototype = {
        init: function () {
            var e = this;

            var utf8Heading = "<meta http-equiv=\"content-type\" content=\"application/vnd.ms-excel; charset=UTF-8\">";
            e.template = {
                head: "<html xmlns:o=\"urn:schemas-microsoft-com:office:office\" xmlns:x=\"urn:schemas-microsoft-com:office:excel\" xmlns=\"http://www.w3.org/TR/REC-html40\">" + utf8Heading + "<head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets>",
                sheet: {
                    head: "<x:ExcelWorksheet><x:Name>",
                    tail: "</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet>"
                },
                mid: "</x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--></head><body>",
                table: {
                    head: "<table>",
                    tail: "</table>"
                },
                foot: "</body></html>"
            };

            e.tableRows = [];
            ////-----------------------------

            ////-----------------------------

            // Styling variables
            var additionalStyles = "";
            var compStyle = null;
            //let = e.elementmyTable
            //console.log(e.element)
            // let mautau = document.getElementById("myTable").rows.length;
            // let mautau = e.element.children[0].getAttribute("id");
            // console.log(mautau)

            //let baristabel = document.getElementById("myTableCopy").rows.length;
            //let baristabel = 21 + e.settings.jumlahheader + 4;// e.settings.barisatas;
            //let baristabel = jsondatasiswa.length + e.settings.jumlahheader + 4;
            // let baristabel = dataapiguru.length + e.settings.jumlahheader + e.settings.barisatas;//4;
            let baristabel;// = e.settings.tabelmana + e.settings.jumlahheader + e.settings.barisatas;//4;
            // //console.log(baristabel)
            // if (e.settings.tabelmana == dataapiguru.length) {
            //     baristabel = dataapiguru.length + e.settings.jumlahheader + e.settings.barisatas;//4;
            // } else {
            baristabel = e.settings.tabelmana + e.settings.jumlahheader + e.settings.barisatas;//4;
            // }
            let lr = e.settings.barisatas;



            // get contents of table except for exclude
            $(e.element).each(function (i, o) {
                var tempRows = "";

                $(o).find("tr").not(e.settings.exclude).each(function (i, p) {

                    // Reset for this row

                    ////// seleesaaaai =================================

                    additionalStyles = "";

                    // Preserve background and text colors on the row
                    if (e.settings.preserveColors) {
                        compStyle = getComputedStyle(p);
                        additionalStyles += (compStyle && compStyle.backgroundColor ? "background-color: " + compStyle.backgroundColor + ";" : "");
                        additionalStyles += (compStyle && compStyle.color ? "color: " + compStyle.color + ";" : "");
                    }

                    // Create HTML for Row&& 
                    var adajudul = "";//(e.settings.exclude_judul) ? "text-align:center;" : "text-align:left;"
                    if (i < lr) {
                        adajudul = "text-align:center;"

                    } else if (i > baristabel) {
                        adajudul = "text-align:center;word-wrap: normal;"
                    } else {

                        adajudul = "text-align:left;"
                    }

                    tempRows += "<tr style='" + adajudul + "'>";
                    //var adattd = 

                    // Loop through each TH and TD
                    $(p).find("td,th").not(e.settings.exclude).each(function (ii, q) { // p did not exist, I corrected

                        // Reset for this column
                        var awaadajudul = "";
                        if (i < lr) {
                            awaadajudul = "";
                            //awaadajudul = "border:.5pt solid #000;border-collapse:collapse;border-spacing: 0;";

                        } else if (i >= baristabel) {
                            awaadajudul = "word-wrap: normal;";

                        } else {

                            awaadajudul = "border:.5pt solid #000;border-collapse:collapse;border-spacing: 0;";
                        }

                        additionalStyles = awaadajudul;

                        // Preserve background and text colors on the row
                        var warnain = "";
                        if (e.settings.preserveColors) {
                            compStyle = getComputedStyle(q);
                            warnain += (compStyle && compStyle.backgroundColor ? "background-color: " + compStyle.backgroundColor + ";" : "");
                            warnain += (compStyle && compStyle.color ? "color: " + compStyle.color + ";" : "");
                        }

                        //var awasadawarna = (e.settings.exclude_judul && i <= 3) ? "" : warnain + additionalStyles;
                        var awasadawarna = "";
                        if (i < lr) {
                            awasadawarna = ""

                        } else if (i >= baristabel) {
                            awasadawarna = ""

                        } else {

                            awasadawarna = warnain + additionalStyles;
                        }

                        var rc = {
                            rows: $(this).attr("rowspan"),
                            cols: $(this).attr("colspan"),
                            flag: $(q).find(e.settings.exclude)
                        };

                        if (rc.flag.length > 0) {
                            tempRows += "<td> </td>"; // exclude it!!
                        } else {
                            tempRows += "<td";
                            if (rc.rows > 0) {
                                tempRows += " rowspan='" + rc.rows + "' ";
                                awasadawarna += "vertical-align:middle;"
                                awasadawarna += "text-align:center;"
                            }
                            if (rc.cols > 0) {
                                tempRows += " colspan='" + rc.cols + "' ";
                                awasadawarna += "text-align:center;"
                            }
                            // if (additionalStyles) {
                            //     tempRows += " style='" + additionalStyles + "'";
                            // }
                            if (warnain) {
                                tempRows += " style='" + awasadawarna + "'";
                            }
                            tempRows += ">" + $(q).html() + "</td>";
                        }
                    });

                    tempRows += "</tr>";



                });
                // exclude img tags
                if (e.settings.exclude_img) {
                    tempRows = exclude_img(tempRows);
                }

                // exclude link tags
                if (e.settings.exclude_links) {
                    tempRows = exclude_links(tempRows);
                }

                // exclude input tags
                if (e.settings.exclude_inputs) {
                    tempRows = exclude_inputs(tempRows);
                }
                e.tableRows.push(tempRows);
            });

            e.tableToExcel(e.tableRows, e.settings.name, e.settings.sheetName);
        },

        tableToExcel: function (table, name, sheetName) {
            var e = this, fullTemplate = "", i, link, a;

            e.format = function (s, c) {
                return s.replace(/{(\w+)}/g, function (m, p) {
                    return c[p];
                });
            };

            sheetName = typeof sheetName === "undefined" ? "Sheet" : sheetName;

            e.ctx = {
                worksheet: name || "Worksheet",
                table: table,
                sheetName: sheetName
            };

            fullTemplate = e.template.head;

            if ($.isArray(table)) {
                Object.keys(table).forEach(function (i) {
                    //fullTemplate += e.template.sheet.head + "{worksheet" + i + "}" + e.template.sheet.tail;
                    fullTemplate += e.template.sheet.head + sheetName + i + e.template.sheet.tail;
                });
            }

            fullTemplate += e.template.mid;

            if ($.isArray(table)) {
                Object.keys(table).forEach(function (i) {
                    fullTemplate += e.template.table.head + "{table" + i + "}" + e.template.table.tail;
                });
            }

            fullTemplate += e.template.foot;

            for (i in table) {
                e.ctx["table" + i] = table[i];
            }
            delete e.ctx.table;

            var isIE = navigator.appVersion.indexOf("MSIE 10") !== -1 || (navigator.userAgent.indexOf("Trident") !== -1 && navigator.userAgent.indexOf("rv:11") !== -1); // this works with IE10 and IE11 both :)
            //if (typeof msie !== "undefined" && msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./))      // this works ONLY with IE 11!!!
            if (isIE) {
                if (typeof Blob !== "undefined") {
                    //use blobs if we can
                    fullTemplate = e.format(fullTemplate, e.ctx); // with this, works with IE
                    fullTemplate = [fullTemplate];
                    //convert to array
                    var blob1 = new Blob(fullTemplate, { type: "text/html" });
                    window.navigator.msSaveBlob(blob1, getFileName(e.settings));
                } else {
                    //otherwise use the iframe and save
                    //requires a blank iframe on page called txtArea1
                    txtArea1.document.open("text/html", "replace");
                    txtArea1.document.write(e.format(fullTemplate, e.ctx));
                    txtArea1.document.close();
                    txtArea1.focus();
                    sa = txtArea1.document.execCommand("SaveAs", true, getFileName(e.settings));
                }

            } else {
                //"application/vnd.ms-excel"
                //asal:
                //application/vnd.ms-excel
                var blob = new Blob([e.format(fullTemplate, e.ctx)], { type: "application/vnd.ms-excel" });
                window.URL = window.URL || window.webkitURL;
                link = window.URL.createObjectURL(blob);
                a = document.createElement("a");
                a.download = getFileName(e.settings);
                a.href = link;

                document.body.appendChild(a);

                a.click();

                document.body.removeChild(a);
            }

            return true;
        }
    };

    function getFileName(settings) {
        return (settings.filename ? settings.filename : "table2excel");
    }

    // Removes all img tags
    function exclude_img(string) {
        var _patt = /(\s+alt\s*=\s*"([^"]*)"|\s+alt\s*=\s*'([^']*)')/i;
        return string.replace(/<img[^>]*>/gi, function myFunction(x) {
            var res = _patt.exec(x);
            if (res !== null && res.length >= 2) {
                return res[2];
            } else {
                return "";
            }
        });
    }

    // Removes all link tags
    function exclude_links(string) {
        return string.replace(/<a[^>]*>|<\/a>/gi, "");
    }

    // Removes input params
    function exclude_inputs(string) {
        var _patt = /(\s+value\s*=\s*"([^"]*)"|\s+value\s*=\s*'([^']*)')/i;
        return string.replace(/<input[^>]*>|<\/input>/gi, function myFunction(x) {
            var res = _patt.exec(x);
            if (res !== null && res.length >= 2) {
                return res[2];
            } else {
                return "";
            }
        });
    }

    $.fn[pluginName] = function (options) {
        var e = this;
        e.each(function () {
            if (!$.data(e, "plugin_" + pluginName)) {
                $.data(e, "plugin_" + pluginName, new Plugin(this, options));
            }
        });

        // chain jQuery functions
        return e;
    };

})(jQuery, window, document);

