
function ySc(data, selY) {
    var ret = d3.scaleLinear()
        .domain([d3.min(data, d => d[selY]) * 0.9,
            d3.max(data, d => d[selY]) * 1.1
        ])
        .range([hgt, 0]);
    return ret;
  };
  

function setDTool(selX, ret, selY) {
let lab;
let u;

if(selX === "poverty") {
    lab = "Poverty: " 
    u = "%"
}

else if(selX === "age") {
    lab = "Age: "
    u = " yrs"
}

else {
    lab = "Household Income: $"
    u = ""
}

if(selY === "healthcare") {
    yLab = "Lack Healthcare: " 
    yU = "%"
}

else if(selY === "smokes") {
    yLab = "Smoke: "
    yU = "%"
}

else {
    yLab = "Obesity"
    yU = "%"
}

var dTip = d3.tip()
    .attr("class", "d3-tip")
    .offset([80, -80])
    .html(function(d) {
        return(`<strong>${d.state}</strong><br>${label}${d[selX]}${unit}<br>${yLabel}${d.healthcare}${yUnit}`);
    });

chGp.call(dTip);

ret
    .on("mouseover", function(d) {dTip.show(d, this);
    })
    .on("mouseout", function(data){dTip.hide(data);
    });
return ret;
}

function setCirc(ret, nueX, selX, nueY, selY) {
ret.transition()
    .duration(1500)
    .attr("cx", d => nueX(d[selX]))
    .attr("cy", d => nueY(d[selY]))
return ret;
}

function setCircTxt(ret, nueX, selX, nueY, selY) {
ret.transition()
    .duration(1500)
    .attr("x", d => nueX(d[selX]))
    .attr("y", d => nueY(d[selY]))
return ret;
}


function xSc(data, selX) {
  var ret = d3.scaleLinear()
      .domain([d3.min(data, d => d[selX]) * 0.9,
          d3.max(data, d => d[selX]) * 1.1
      ])
      .range([0, wdt]);
  return ret;
};

function setXAx(nueX, xAx) {
  var ret = d3.axisBottom(nueX);

  xAx.transition()
      .duration(1500)
      .call(ret);
  return xAx;
}

function setYAx(nueY, ret) {
  var upDown = d3.axisLeft(nueY);

  ret.transition()
      .duration(1500)
      .call(upDown);
  return ret;
}
