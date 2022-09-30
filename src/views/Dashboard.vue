<template>
  <main class="dashboard-page">
    <h1>Dashboard</h1>
    <div class="cards-dashboard">
      <div class="card">
        <div class="card-body">
          <div class="card-title">
            <h5>On Progress</h5>
            <span>
              <div class="row d-flex justify-content-center mt-100">
                <div class="col-md-6">
                  <div class="progress blue">
                    <span class="progress-left">
                      <span class="progress-bar"></span>
                    </span>
                    <span class="progress-right">
                      <span class="progress-bar"></span>
                    </span>
                    <div class="progress-value">90%</div>
                  </div>
                </div>
              </div>
            </span>
          </div>
          <div class="card-icon">
            <span class="material-icons"></span>
          </div>
        </div>
        <div class="card-footer">
          <p></p>
          <span></span>
        </div>
      </div>

      <div class="card">
        <div class="card-body">
          <div class="card-title">
            <h5>On Hold</h5>
            <span></span>
          </div>
          <div class="card-icon">
            <span class="material-icons"></span>
          </div>
        </div>
        <div class="card-footer">
          <p></p>
          <span></span>
        </div>
      </div>

      <div class="card">
        <div class="card-body">
          <div class="card-title">
            <h5>Not Started</h5>
            <span></span>
          </div>
          <div class="card-icon">
            <span class="material-icons"></span>
          </div>
        </div>
        <div class="card-footer">
          <p></p>
          <span></span>
        </div>
      </div>

      <div class="card">
        <div class="card-body">
          <div class="card-title">
            <h5>Done</h5>
            <span></span>
          </div>
          <div class="card-icon">
            <span class="material-icons"></span>
          </div>
        </div>
        <div class="card-footer">
          <p></p>
          <span></span>
        </div>
      </div>

      <!-- <div class="page-content page-container" id="page-content"> -->
      <div class="padding">
        <div class="row container d-flex justify-content-center">
          <div class="col-md-4 grid-margin stretch-card">
            <div class="card2">
              <div class="card-body2">
                <h4 class="card-title2">Round badges</h4>
                <p class="card-description2">
                  For what reason would it be advisable for me to think about
                  business content
                </p>
                <div class="template-demo">
                  <table class="table mb-0">
                    <thead>
                      <tr>
                        <th class="pl-0">Item</th>
                        <th class="text-right">Label</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td class="pl-0">Primary label</td>
                        <td class="pr-0 text-right">
                          <div class="badge badge-primary badge-pill">
                            Primary
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td class="pl-0">Info label</td>
                        <td class="pr-0 text-right">
                          <div class="badge badge-info badge-pill">Info</div>
                        </td>
                      </tr>
                      <tr>
                        <td class="pl-0">Danger label</td>
                        <td class="pr-0 text-right">
                          <div class="badge badge-danger badge-pill">
                            Danger
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td class="pl-0">Success label</td>
                        <td class="pr-0 text-right">
                          <div class="badge badge-success badge-pill">
                            Success
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td class="pl-0">Warning label</td>
                        <td class="pr-0 text-right">
                          <div class="badge badge-warning badge-pill">
                            Warning
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- </div> -->
  </main>
</template>

<style>
.cards-dashboard {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  margin-top: 20px;
  gap: 30px;
}
.cards-dashboard .card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border: 1px solid rgb(194, 193, 193);
  border-radius: 12px;
  padding: 16px;
}

.card-body {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 10px;
}

.card-title h5 {
  font-size: 18px;
  color: gray;
  font-weight: 500;
  margin-bottom: 10px;
}

.card-title span {
  font-size: 34px;
  color: rgb(0, 0, 0);
  font-weight: 500;
  font-weight: 700;
}

/* .card-icon {
  height: 54px;
  width: 54px;
  border-radius: 100%;
  background-color: #90f093;
  display: flex;
  justify-content: center;
  align-items: center;
} */

.card-footer {
  border-top: 1px solid #868786;
  display: flex;
  align-items: center;
  padding: 10px 0;
}
.card-footer p {
  color: #0cf314;
  margin-right: 10px;
}
.card-footer span {
  color: #868786;
}

.mt-100 {
  margin-top: 10px;
  position: relative;
}
.progress {
  width: 130px;
  height: 130px !important;
  float: left;
  line-height: 130px;
  background: none;
  margin: 10px;
  box-shadow: none;
  position: relative;
}
.progress:after {
  content: "";
  width: 70%;
  height: 70%;
  border-radius: 39%;
  /* border: 12px solid #fff; */
  position: absolute;
  top: 0;
  left: 0;
}
.progress > span {
  width: 50%;
  height: 100%;
  overflow: hidden;
  position: absolute;
  top: 0;
  z-index: 1;
}
.progress .progress-left {
  left: 0;
}
.progress .progress-bar {
  width: 100%;
  height: 100%;
  background: none;
  border-width: 8px;
  border-style: solid;
  position: absolute;
  top: 0;
}
.progress .progress-left .progress-bar {
  left: 100%;
  border-top-right-radius: 80px;
  border-bottom-right-radius: 80px;
  border-left: 0;
  -webkit-transform-origin: center left;
  transform-origin: center left;
}
.progress .progress-right {
  right: 0;
}
.progress .progress-right .progress-bar {
  left: -100%;
  border-top-left-radius: 80px;
  border-bottom-left-radius: 80px;
  border-right: 0;
  -webkit-transform-origin: center right;
  transform-origin: center right;
  animation: loading-1 1.8s linear forwards;
}
.progress .progress-value {
  width: 90%;
  height: 90%;
  border-radius: 50%;
  background: #000;
  font-size: 24px;
  color: #fff;
  line-height: 120px;
  text-align: center;
  position: absolute;
  top: 5%;
  left: 5%;
}
.progress.blue .progress-bar {
  border-color: #049dff;
}
.progress.blue .progress-left .progress-bar {
  animation: loading-2 1.5s linear forwards 1.8s;
}
/* //kpi proect */
body {
  background-color: #f9f9fa;
}

.flex {
  -webkit-box-flex: 1;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
}

@media (max-width: 991.98px) {
  .padding {
    padding: 1.5rem;
  }
}

@media (max-width: 767.98px) {
  .padding {
    padding: 1rem;
  }
}

.padding {
  padding: 0rem;
}

.stretch-card {
  display: -webkit-flex;
  display: flex;
  -webkit-align-items: stretch;
  align-items: stretch;
  -webkit-justify-content: stretch;
  justify-content: stretch;
}

.grid-margin {
  margin-bottom: 1.875rem;
}

.card2 {
  position: relative;
  display: flex;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid #d2d2dc;
  border-radius: 12px;
}

.card2 .card-body2 {
  padding: 1.25rem 1.75rem;
}

.card-body2 {
  flex: 1 1 auto;
  padding: 1.25rem;
}

.card2 .card-title2 {
  color: #000000;
  margin-bottom: 0.625rem;
  text-transform: capitalize;
  font-size: 0.875rem;
  font-weight: 500;
}

.card2 .card-description2 {
  margin-bottom: 0.875rem;
  font-weight: 400;
  color: #76838f;
}

p {
  font-size: 0.875rem;
  margin-bottom: 0.5rem;
  line-height: 1.5rem;
}

.table thead th,
.jsgrid .jsgrid-table thead th {
  border-top: 0;
  border-bottom-width: 1px;
  font-weight: 500;
  font-size: 0.875rem;
  text-transform: uppercase;
}

.table td,
.jsgrid .jsgrid-table td {
  font-size: 0.875rem;
  padding: 0.875rem 0.9375rem;
}

.badge {
  border-radius: 0;
  font-size: 12px;
  line-height: 1;
  padding: 0.375rem 0.5625rem;
  font-weight: normal;
}

.badge.badge-pill {
  border-radius: 10rem;
}
/* end kpi project */
@keyframes loading-1 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg);
  }
}
@keyframes loading-2 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(144deg);
    transform: rotate(144deg);
  }
}
@keyframes loading-3 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(135deg);
    transform: rotate(135deg);
  }
}

@media only screen and (max-width: 768px) {
  /* For mobile phones: */
  .cards-dashboard {
    grid-template-columns: 1fr;
  }
}
</style>
