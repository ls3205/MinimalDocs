function DesktopSVG() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`group sm:hidden cursor-pointer w-[100px] h-[100px] text-subtext border-2 border-subtext rounded-xl transition-all duration-300 hover:rounded-2xl hover:border-text active:transition-none active:border-highlight ${
                // activeCheck
                //     ? "border-highlight rounded-2xl"
                //     : "border-subtext rounded-xl"
                null
            } `}
            version="1.1"
            id="Layer_1"
            x="0px"
            y="0px"
            width="60px"
            viewBox="0 0 1000 1000"
            enableBackground="new 0 0 1000 1000"
        >
            <path
                className="fill-bg"
                opacity="1.000000"
                stroke="none"
                d=" M691.000000,1001.000000   C460.666656,1001.000000 230.833328,1001.000000 1.000000,1001.000000   C1.000000,667.666687 1.000000,334.333344 1.000000,1.000000   C334.333344,1.000000 667.666687,1.000000 1001.000000,1.000000   C1001.000000,334.333344 1001.000000,667.666687 1001.000000,1001.000000   C897.833313,1001.000000 794.666687,1001.000000 691.000000,1001.000000  M411.034485,265.010284   C327.081390,265.010284 243.128311,265.010284 159.149353,265.010284   C159.149353,268.358398 159.149353,271.165710 159.033432,274.907196   C159.033432,417.807709 159.033432,560.708191 159.033432,704.000000   C169.291702,704.000000 178.926575,704.009155 188.561401,703.998413   C230.049881,703.952332 271.538361,703.900452 313.956665,703.989258   C351.962097,703.943054 389.967560,703.896851 428.907196,703.966553   C449.856445,703.977722 470.805756,704.013123 491.754974,703.994263   C522.178955,703.966858 552.602905,703.900391 583.956726,703.989319   C621.962158,703.943054 659.967590,703.896851 698.907288,703.966492   C750.153320,703.966492 801.399353,703.966492 853.000000,703.966492   C853.000000,701.499084 853.000000,699.692078 853.000000,697.885071   C853.000000,607.077881 853.000916,516.270691 852.993835,425.463470   C852.993713,423.633179 852.900574,421.802887 852.989319,419.042877   C852.989319,367.778442 852.989319,316.514008 852.989319,265.238464   C851.990723,265.117889 851.514526,265.010101 851.038330,265.010010   C799.040955,265.001465 747.043640,264.996033 695.046265,265.036743   C694.035095,265.037537 693.024353,265.587189 691.167969,265.922607   C682.433228,265.663025 673.698425,265.403442 664.034546,265.010315   C595.516296,265.006866 526.997986,264.999023 458.479706,265.006317   C450.999084,265.007111 443.518433,265.095306 435.101715,265.032043   C427.389008,265.069305 419.676300,265.106567 411.034485,265.010284  z"
            />
            <path
                className={`group-hover:fill-text group-active:fill-highlight transition-all duration-300 active:transition-none fill-subtext`}
                opacity="1.000000"
                stroke="none"
                d=" M583.026917,703.850586   C552.602905,703.900391 522.178955,703.966858 491.754974,703.994263   C470.805756,704.013123 449.856445,703.977722 428.451416,703.451416   C427.997101,620.782288 428.013885,538.628418 427.957733,456.474518   C427.954712,452.051178 427.526611,447.604828 426.976135,443.209259   C424.776672,425.646301 415.431152,412.969238 399.829132,405.028046   C384.988068,397.474213 369.283295,397.202148 353.433746,401.040314   C338.409729,404.678558 327.178101,413.150055 319.838013,427.137268   C314.450989,437.402679 313.226562,448.450439 313.182648,459.389709   C312.855225,540.875549 313.017883,622.363403 313.026855,703.850586   C271.538361,703.900452 230.049881,703.952332 188.561401,703.998413   C178.926575,704.009155 169.291702,704.000000 159.033432,704.000000   C159.033432,560.708191 159.033432,417.807709 159.548584,274.451416   C210.946060,273.995667 261.828369,273.995667 313.132935,273.995667   C313.132935,282.644806 313.132935,290.698822 313.132935,298.150604   C325.544861,291.722382 337.635895,284.872498 350.219421,279.095428   C365.198456,272.218628 381.161774,268.513214 397.605927,266.971222   C402.406738,266.521057 407.178497,265.761566 411.963593,265.143860   C419.676300,265.106567 427.389008,265.069305 435.791016,265.447449   C440.732941,266.240479 444.990417,266.570496 449.237274,267.004333   C464.559753,268.569427 479.078369,273.111084 492.967773,279.539337   C510.652985,287.724335 526.315491,298.897095 539.590088,313.208313   C542.645447,316.502319 544.519226,316.345520 547.492493,313.165924   C550.956787,309.461334 554.885254,306.114777 558.949280,303.061249   C571.451904,293.667084 584.799805,285.753540 599.369873,279.857086   C615.411316,273.365234 631.873901,268.772064 649.104370,266.988281   C654.397705,266.440277 659.677612,265.762329 664.963684,265.143890   C673.698425,265.403442 682.433228,265.663025 692.049194,265.954102   C699.435486,266.656433 705.955139,267.210236 712.442566,268.021576   C727.659668,269.924683 742.206909,274.343353 756.122498,280.649933   C776.872986,290.054077 795.469116,302.610016 809.865051,320.512695   C817.181458,329.611298 824.470337,338.929626 830.262695,349.015228   C842.452209,370.239624 849.313599,393.324646 851.073914,417.841431   C851.127686,418.590454 852.234802,419.263916 852.850891,419.972595   C852.900574,421.802887 852.993713,423.633179 852.993835,425.463470   C853.000916,516.270691 853.000000,607.077881 853.000000,697.885071   C853.000000,699.692078 853.000000,701.499084 853.000000,703.966492   C801.399353,703.966492 750.153320,703.966492 698.451477,703.451355   C697.997131,620.825500 698.015198,538.714783 697.957153,456.604095   C697.953796,451.852478 697.713989,447.037354 696.929626,442.361572   C694.205200,426.120880 685.776978,413.651062 671.035767,406.066132   C652.539917,396.549286 633.627136,396.523224 614.239624,403.847717   C595.328125,410.992371 583.263977,429.976868 583.180237,448.026093   C582.784973,533.299316 583.017944,618.575500 583.026917,703.850586  z"
            />
            <path
                className="fill-bg"
                opacity="1.000000"
                stroke="none"
                d=" M583.491821,703.919922   C583.017944,618.575500 582.784973,533.299316 583.180237,448.026093   C583.263977,429.976868 595.328125,410.992371 614.239624,403.847717   C633.627136,396.523224 652.539917,396.549286 671.035767,406.066132   C685.776978,413.651062 694.205200,426.120880 696.929626,442.361572   C697.713989,447.037354 697.953796,451.852478 697.957153,456.604095   C698.015198,538.714783 697.997131,620.825500 697.984375,703.393433   C659.967590,703.896851 621.962158,703.943054 583.491821,703.919922  z"
            />
            <path
                className="fill-bg"
                opacity="1.000000"
                stroke="none"
                d=" M313.491760,703.919922   C313.017883,622.363403 312.855225,540.875549 313.182648,459.389709   C313.226562,448.450439 314.450989,437.402679 319.838013,427.137268   C327.178101,413.150055 338.409729,404.678558 353.433746,401.040314   C369.283295,397.202148 384.988068,397.474213 399.829132,405.028046   C415.431152,412.969238 424.776672,425.646301 426.976135,443.209259   C427.526611,447.604828 427.954712,452.051178 427.957733,456.474518   C428.013885,538.628418 427.997101,620.782288 427.984314,703.393433   C389.967560,703.896851 351.962097,703.943054 313.491760,703.919922  z"
            />
            <path
                className="fill-bg"
                opacity="1.000000"
                stroke="none"
                d=" M852.920105,419.507751   C852.234802,419.263916 851.127686,418.590454 851.073914,417.841431   C849.313599,393.324646 842.452209,370.239624 830.262695,349.015228   C824.470337,338.929626 817.181458,329.611298 809.865051,320.512695   C795.469116,302.610016 776.872986,290.054077 756.122498,280.649933   C742.206909,274.343353 727.659668,269.924683 712.442566,268.021576   C705.955139,267.210236 699.435486,266.656433 692.471924,265.933167   C693.024353,265.587189 694.035095,265.037537 695.046265,265.036743   C747.043640,264.996033 799.040955,265.001465 851.038330,265.010010   C851.514526,265.010101 851.990723,265.117889 852.989319,265.238464   C852.989319,316.514008 852.989319,367.778442 852.920105,419.507751  z"
            />
            <path
                className="fill-bg"
                opacity="1.000000"
                stroke="none"
                d=" M664.499146,265.077087   C659.677612,265.762329 654.397705,266.440277 649.104370,266.988281   C631.873901,268.772064 615.411316,273.365234 599.369873,279.857086   C584.799805,285.753540 571.451904,293.667084 558.949280,303.061249   C554.885254,306.114777 550.956787,309.461334 547.492493,313.165924   C544.519226,316.345520 542.645447,316.502319 539.590088,313.208313   C526.315491,298.897095 510.652985,287.724335 492.967773,279.539337   C479.078369,273.111084 464.559753,268.569427 449.237274,267.004333   C444.990417,266.570496 440.732941,266.240479 436.259094,265.502899   C443.518433,265.095306 450.999084,265.007111 458.479706,265.006317   C526.997986,264.999023 595.516296,265.006866 664.499146,265.077087  z"
            />
            <path
                className="fill-bg"
                opacity="1.000000"
                stroke="none"
                d=" M411.499023,265.077087   C407.178497,265.761566 402.406738,266.521057 397.605927,266.971222   C381.161774,268.513214 365.198456,272.218628 350.219421,279.095428   C337.635895,284.872498 325.544861,291.722382 313.132935,298.150604   C313.132935,290.698822 313.132935,282.644806 313.132935,273.995667   C261.828369,273.995667 210.946060,273.995667 159.606552,273.984314   C159.149353,271.165710 159.149353,268.358398 159.149353,265.010284   C243.128311,265.010284 327.081390,265.010284 411.499023,265.077087  z"
            />
        </svg>
    );
}

export default DesktopSVG;
