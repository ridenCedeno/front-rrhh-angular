import {
  ApexAnnotations,
  ApexAxisChartSeries,
  ApexChart,
  ApexDataLabels,
  ApexFill,
  ApexGrid,
  ApexLegend,
  ApexMarkers,
  ApexNonAxisChartSeries,
  ApexPlotOptions,
  ApexResponsive,
  ApexStroke,
  ApexTheme,
  ApexTitleSubtitle,
  ApexXAxis,
  ApexYAxis,
} from 'ng-apexcharts';

let primary_color = localStorage.getItem('primary_color') || '#7366ff';
let secondary_color = localStorage.getItem('secondary_color') || '#f73164';

export type ChartOptions = {
  series?: ApexAxisChartSeries;
  chart?: ApexChart;
  xaxis?: ApexXAxis;
  stroke?: ApexStroke;
  tooltip?: any;
  dataLabels?: ApexDataLabels;
  yaxis?: ApexYAxis;
  legend?: ApexLegend;
  labels?: string[];
  plotOptions?: ApexPlotOptions;
  fill?: ApexFill;
  responsive?: ApexResponsive[];
  pieseries?: ApexNonAxisChartSeries;
  title?: ApexTitleSubtitle;
  theme?: ApexTheme;
  colors?: string[];
  markers?: ApexMarkers;
  annotations?: ApexAnnotations;
  grid?: ApexGrid;
};

// Overall Balance

export let overallBalance: ChartOptions | any = {
  series: [
    {
      name: 'Earning',
      data: [
        200, 200, 350, 400, 200, 250, 250, 350, 350, 500, 500, 700, 850, 700,
        400, 400, 250, 250, 400, 350, 400,
      ],
    },
    {
      name: 'Expense',
      data: [
        400, 600, 700, 400, 700, 800, 800, 850, 850, 900, 900, 700, 600, 500,
        800, 800, 800, 800, 400, 700, 800,
      ],
    },
  ],
  chart: {
    type: 'bar',
    height: 300,
    stacked: true,
    toolbar: {
      show: false,
    },
    dropShadow: {
      enabled: true,
      top: 8,
      left: 0,
      blur: 10,
      color: 'primary_color',
      opacity: 0.1,
    },
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '10px',
      borderRadius: 0,
    },
  },
  grid: {
    show: true,
    borderColor: 'var(--chart-border)',
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    width: 2,
    dashArray: 0,
    lineCap: 'butt',
    colors: '#fff',
  },
  fill: {
    opacity: 1,
  },
  legend: {
    show: false,
  },
  states: {
    hover: {
      filter: {
        type: 'darken',
        value: 1,
      },
    },
  },
  colors: [primary_color, '#AAAFCB'],
  yaxis: {
    tickAmount: 3,
    labels: {
      show: true,
      style: {
        fontFamily: 'Rubik, sans-serif',
      },
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  xaxis: {
    categories: [
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '10',
      '11',
      '12',
      '13',
      '14',
      '15',
      '16',
      '17',
      '18',
      '19',
      '20',
      '21',
    ],
    labels: {
      style: {
        fontFamily: 'Rubik, sans-serif',
      },
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  responsive: [
    {
      breakpoint: 1661,
      options: {
        chart: {
          height: 290,
        },
      },
    },
    {
      breakpoint: 767,
      options: {
        plotOptions: {
          bar: {
            columnWidth: '35px',
          },
        },
        yaxis: {
          labels: {
            show: false,
          },
        },
      },
    },
    {
      breakpoint: 481,
      options: {
        chart: {
          height: 200,
        },
      },
    },
    {
      breakpoint: 420,
      options: {
        chart: {
          height: 170,
        },
        plotOptions: {
          bar: {
            columnWidth: '40px',
          },
        },
      },
    },
  ],
};

// Recent Orders

export let recentOrders: ChartOptions | any = {
  series: [100],
  chart: {
    height: 290,
    type: 'radialBar',
    toolbar: {
      show: false,
    },
  },
  plotOptions: {
    radialBar: {
      hollow: {
        margin: 0,
        size: '60%',
        background: 'var(--recent-chart-bg)',
        image: undefined,
        imageOffsetX: 0,
        imageOffsetY: 0,
        position: 'front',
        dropShadow: {
          enabled: true,
          top: 3,
          left: 0,
          blur: 4,
          opacity: 0.05,
        },
      },
      track: {
        background: '#F4F4F4',
        strokeWidth: '67%',
        margin: 0,
        dropShadow: {
          enabled: true,
          top: 0,
          left: 0,
          blur: 10,
          color: '#ddd',
          opacity: 1,
        },
      },

      dataLabels: {
        show: true,
        name: {
          offsetY: 30,
          show: true,
          color: '#888',
          fontSize: '17px',
          fontWeight: '500',
          fontFamily: 'Rubik, sans-serif',
        },
        value: {
          formatter: function (val: string) {
            return parseInt(val);
          },
          offsetY: -8,
          color: '#111',
          fontSize: '36px',
          show: true,
        },
      },
    },
  },
  fill: {
    type: 'gradient',
    gradient: {
      shade: 'dark',
      type: 'horizontal',
      shadeIntensity: 0.5,
      opacityFrom: 1,
      opacityTo: 1,
      colorStops: [
        {
          offset: 0,
          color: '#7366FF',
          opacity: 1,
        },
        {
          offset: 20,
          color: '#3EA4F1',
          opacity: 1,
        },
        {
          offset: 100,
          color: '#FFFFFF',
          opacity: 1,
        },
      ],
    },
  },
  stroke: {
    lineCap: 'round',
  },
  labels: ['Total Profit'],
  responsive: [
    {
      breakpoint: 1840,
      options: {
        chart: {
          height: 260,
        },
      },
    },
    {
      breakpoint: 1700,
      options: {
        chart: {
          height: 250,
        },
      },
    },
    {
      breakpoint: 1660,
      options: {
        chart: {
          height: 230,
          dataLabels: {
            name: {
              fontSize: '15px',
            },
          },
        },
      },
    },
    {
      breakpoint: 1561,
      options: {
        chart: {
          height: 275,
        },
      },
    },
    {
      breakpoint: 1400,
      options: {
        chart: {
          height: 360,
        },
      },
    },
    {
      breakpoint: 1361,
      options: {
        chart: {
          height: 300,
        },
      },
    },
    {
      breakpoint: 1200,
      options: {
        chart: {
          height: 230,
        },
      },
    },
    {
      breakpoint: 1007,
      options: {
        chart: {
          height: 240,
        },
      },
    },
    {
      breakpoint: 600,
      options: {
        chart: {
          height: 230,
        },
      },
    },
  ],
};

//Time Line

export let timeLine: ChartOptions | any = {
  series: [
    {
      data: [
        {
          x: 'Analysis',
          y: [
            new Date('2022-01-01').getTime(),
            new Date('2022-02-30').getTime(),
          ],
          fillColor: 'var(--theme-deafult)',
        },
        {
          x: 'Design',
          y: [
            new Date('2022-02-20').getTime(),
            new Date('2022-04-08').getTime(),
          ],
          fillColor: '#54BA4A',
        },
        {
          x: 'Coding',
          y: [
            new Date('2022-01-25').getTime(),
            new Date('2022-03-20').getTime(),
          ],
          fillColor: '#FFAA05',
        },
        {
          x: 'Testing',
          y: [
            new Date('2022-01-01').getTime(),
            new Date('2022-03-12').getTime(),
          ],
          fillColor: '#46A7FB',
        },
      ],
    },
  ],
  chart: {
    height: 355,
    type: 'rangeBar',
    toolbar: {
      show: false,
    },
  },
  plotOptions: {
    bar: {
      horizontal: true,
      distributed: true,
      barHeight: '40%',
      dataLabels: {
        hideOverflowingLabels: false,
      },
    },
  },
  dataLabels: {
    enabled: true,
    formatter: function (val: any, opts: { w: { globals: { labels: { [x: string]: any; }; }; }; dataPointIndex: string | number; }) {
      var label = opts.w.globals.labels[opts.dataPointIndex];
      // var a = moment(val[0]);
      // var b = moment(val[1]);
      // var diff = b.diff(a, "days");
      return label;
    },
    textAnchor: 'end',
    offsetX: 0,
    offsetY: 0,
    background: {
      enabled: true,
      foreColor: '#52526C',
      padding: 15,
      borderRadius: 12,
      borderWidth: 1,
      borderColor: 'var(--white)',
      opacity: 0.9,
    },
  },
  xaxis: {
    type: 'datetime',
    position: 'top',
  },
  yaxis: {
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  grid: {
    row: {
      colors: ['var(--light-background)', 'var(--white)'],
      opacity: 1,
    },
  },
  responsive: [
    {
      breakpoint: 576,
      options: {
        yaxis: {
          labels: {
            show: false,
          },
        },
        grid: {
          padding: {
            left: -10,
          },
        },
      },
    },
  ],
};

export let followersGrowth: ChartOptions | any = {
  series: [
    {
      name: 'Growth',
      data: [10, 5, 15, 0, 15, 12, 29, 29, 29, 12, 15, 5],
    },
  ],
  chart: {
    height: 200,
    type: 'line',
    toolbar: {
      show: false,
    },
    dropShadow: {
      enabled: true,
      enabledOnSeries: undefined,
      top: 5,
      left: 0,
      blur: 4,
      color: '#7366ff',
      opacity: 0.22,
    },
  },
  grid: {
    yaxis: {
      lines: {
        show: false,
      },
    },
  },
  colors: ['#5527FF'],
  stroke: {
    width: 3,
    curve: 'smooth',
  },
  xaxis: {
    type: 'category',
    categories: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
      'Jan',
    ],
    tickAmount: 10,
    labels: {
      style: {
        fontFamily: 'Rubik, sans-serif',
      },
    },
    axisTicks: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
    tooltip: {
      enabled: false,
    },
  },
  fill: {
    type: 'gradient',
    gradient: {
      shade: 'dark',
      gradientToColors: ['#5527FF'],
      shadeIntensity: 1,
      type: 'horizontal',
      opacityFrom: 1,
      opacityTo: 1,
      colorStops: [
        {
          offset: 0,
          color: '#5527FF',
          opacity: 1,
        },
        {
          offset: 100,
          color: '#E069AE',
          opacity: 1,
        },
      ],
      // stops: [0, 100, 100, 100]
    },
  },
  yaxis: {
    min: -10,
    max: 40,
    labels: {
      show: false,
    },
  },
};

export let profit: ChartOptions | any = {
  series: [
    {
      name: 'Desktops',
      data: [210, 180, 650, 200, 600, 100, 800, 300, 500],
    },
  ],
  chart: {
    width: 200,
    height: 125,
    type: 'line',
    toolbar: {
      show: false,
    },
    dropShadow: {
      enabled: true,
      enabledOnSeries: undefined,
      top: 5,
      left: 0,
      blur: 3,
      color: '#16C7F9',
      opacity: 0.3,
    },
    zoom: {
      enabled: false,
    },
  },
  colors: ['#16C7F9'],
  dataLabels: {
    enabled: false,
  },
  stroke: {
    width: 2,
    curve: 'smooth',
  },
  grid: {
    show: false,
  },
  tooltip: {
    x: {
      show: false,
    },
    y: {
      show: false,
    },
    z: {
      show: false,
    },
    marker: {
      show: false,
    },
  },
  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
    labels: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    tooltip: {
      enabled: false,
    },
  },
  yaxis: {
    labels: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  responsive: [
    {
      breakpoint: 1780,
      options: {
        chart: {
          width: 180,
        },
      },
    },
    {
      breakpoint: 1680,
      options: {
        chart: {
          width: 160,
        },
      },
    },
    {
      breakpoint: 1601,
      options: {
        chart: {
          height: 110,
        },
      },
    },
    {
      breakpoint: 1560,
      options: {
        chart: {
          width: 140,
        },
      },
    },
    {
      breakpoint: 1460,
      options: {
        chart: {
          width: 120,
        },
      },
    },
    {
      breakpoint: 1400,
      options: {
        chart: {
          width: 290,
        },
      },
    },
    {
      breakpoint: 1110,
      options: {
        chart: {
          width: 200,
        },
      },
    },
    {
      breakpoint: 700,
      options: {
        chart: {
          width: 150,
        },
      },
    },
    {
      breakpoint: 576,
      options: {
        chart: {
          width: 220,
        },
      },
    },
    {
      breakpoint: 420,
      options: {
        chart: {
          width: 150,
        },
      },
    },
  ],
};

export let orders: ChartOptions | any = {
  series: [
    {
      name: 'Daily',
      data: [
        2.15, 3, 1.5, 2, 2.4, 3, 2.4, 2.8, 1.5, 1.7, 3, 2.5, 3, 2, 2.15, 3, 1.1,
      ],
    },
    {
      name: 'Weekly',
      data: [
        -2.15, -3, -1.5, -2, -2.4, -3, -2.4, -2.8, -1.5, -1.7, -3, -2.5, -3, -2,
        -2.15, -3, -1.1,
      ],
    },
    {
      name: 'Monthly',
      data: [
        -2.25, -2.35, -2.45, -2.55, -2.65, -2.75, -2.85, -2.95, -3.0, -3.1,
        -3.2, -3.25, -3.1, -3.0, -2.95, -2.85, -2.75,
      ],
    },
    {
      name: 'Yearly',
      data: [
        2.25, 2.35, 2.45, 2.55, 2.65, 2.75, 2.85, 2.95, 3.0, 3.1, 3.2, 3.25,
        3.1, 3.0, 2.95, 2.85, 2.75,
      ],
    },
  ],
  chart: {
    type: 'bar',
    width: 180,
    height: 120,
    stacked: true,
    toolbar: {
      show: false,
    },
  },
  plotOptions: {
    bar: {
      vertical: true,
      columnWidth: '40%',
      barHeight: '80%',
      startingShape: 'rounded',
      endingShape: 'rounded',
    },
  },
  colors: [primary_color, primary_color, '#F2F3F7', '#F2F3F7'],
  dataLabels: {
    enabled: false,
  },
  stroke: {
    width: 0,
  },
  legend: {
    show: false,
  },
  grid: {
    xaxis: {
      offsetX: -2,
      lines: {
        show: false,
      },
    },
    yaxis: {
      lines: {
        show: false,
      },
    },
  },
  yaxis: {
    min: -5,
    max: 5,
    show: false,
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  tooltip: {
    shared: false,
    x: {
      show: false,
    },
    y: {
      show: false,
    },
    z: {
      show: false,
    },
  },
  xaxis: {
    categories: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'July',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
    offsetX: 0,
    offsetY: 0,
    labels: {
      offsetX: 0,
      offsetY: 0,
      show: false,
    },
    axisBorder: {
      offsetX: 0,
      offsetY: 0,
      show: false,
    },
    axisTicks: {
      offsetX: 0,
      offsetY: 0,
      show: false,
    },
  },
  responsive: [
    {
      breakpoint: 1760,
      options: {
        chart: {
          width: 160,
        },
      },
    },
    {
      breakpoint: 1601,
      options: {
        chart: {
          height: 110,
        },
      },
    },
    {
      breakpoint: 1560,
      options: {
        chart: {
          width: 140,
        },
      },
    },
    {
      breakpoint: 1460,
      options: {
        chart: {
          width: 120,
        },
      },
    },
    {
      breakpoint: 1400,
      options: {
        chart: {
          width: 290,
        },
      },
    },
    {
      breakpoint: 1110,
      options: {
        chart: {
          width: 200,
        },
      },
    },
    {
      breakpoint: 700,
      options: {
        chart: {
          width: 150,
        },
      },
    },
    {
      breakpoint: 576,
      options: {
        chart: {
          width: 220,
        },
      },
    },
    {
      breakpoint: 420,
      options: {
        chart: {
          width: 150,
        },
      },
    },
  ],
};

export let purchase = {
  icon: 'cart',
  counter: '10,000',
  name: 'Purchase',
  font: 'secondary',
  pr: '-20',
};

export let salesReturn = {
  icon: 'return-box',
  counter: '10,000',
  name: 'Sales return',
  font: 'warning',
  pr: '+50',
};

export let sales = {
  icon: 'tag',
  counter: '4,200',
  name: 'Sales',
  font: 'primary',
  pr: '+70',
};

export let purchaseRate = {
  icon: 'rate',
  counter: '5700',
  name: 'Purchase',
  font: 'success',
  pr: '+70',
};
