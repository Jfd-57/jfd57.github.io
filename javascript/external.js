var webmaps =
[
    ["Google Maps", "https://www.google.com/maps", "Google Maps is mainly used to help people with directions, routes, traffic, and satellite imagery. It is easy to use and straightforward for everyday users. It can show routes, travel time, traffic, and different map layers. I would make it easier to hide some of the unwanted features that can make the map feel cluttered."],

    ["ArcGIS Online", "https://www.arcgis.com/index.html", "ArcGIS Online is used to create, view, share, and analyze maps. It has many useful GIS tools for mapping, finding locations, analyzing data, and measuring distance. It is useful for GIS users, researchers, and organizations, but it can be confusing for beginners. I would make the commonly used tools easier to find."]
];

function welcome()
{
    let a = "Please enter your name.";
    let b = "Type your name here.";

    // A prompt box is used to prompt users to input a value before entering a page.
    user_name = window.prompt(a, b);

    message = "<h1>Hello, welcome to my webpage, " + user_name + "!</h1>";

    return message;
}

function webmap_table()
{
    document.write("<table width=100%>");

    for (var row=0; row < webmaps.length; row++)
    {
        document.write("<tr>");

        for (var column=0; column < webmaps[0].length; column++)
        {
            document.write("<td>" + webmaps[row][column] + "</td>");
        }

        document.write("</tr>");
    }

    document.write("</table>");

    return "";
}
