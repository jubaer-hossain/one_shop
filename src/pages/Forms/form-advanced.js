import React, { Component } from 'react';
import { Container, Row, Col, Card, CardBody, Form, FormGroup, InputGroup, Label, Input, Button, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { activateAuthLayout } from '../../store/actions';
import { Link, withRouter } from 'react-router-dom';
import { SketchPicker } from 'react-color';
import ColorPicker from '@vtaits/react-color-picker';
import '@vtaits/react-color-picker/dist/index.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Switch from "react-switch";
import Select from 'react-select';
import { connect } from 'react-redux';
import Settingmenu from '../Subpages/Settingmenu';


const optionGroup = [
    {
        label: "Picnic",
        options: [
            { label: "Mustard", value: "Mustard" },
            { label: "Ketchup", value: "Ketchup" },
            { label: "Relish", value: "Relish" }
        ]
    },
    {
        label: "Camping",
        options: [
            { label: "Tent", value: "Tent" },
            { label: "Flashlight", value: "Flashlight" },
            { label: "Toilet Paper", value: "Toilet Paper" }
        ]
    }
];


class FormAdvanced extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: 'red', colorRgb: 'red', colorCust: 'red',

            default_date: new Date(), default: false, start_date: new Date(), monthDate: new Date(), yearDate: new Date(), end_date: new Date(), date: new Date(),

            disbadge: true, disthresh: false, placementbadge: false, textcount: 0, optioncount: 0, placementcount: 0, advanceclass: "badgecount",

            switch1: true, switch2: true, switch3: true, switch4: true, switch5: true, switch6: true, switch7: true, switch8: true, switch9: true,
            switch11: true, switch12: true, switch13: true, switch14: true, switch15: true,

            data_attr: 56, postfix: 20, prefix: 25,
            empty_val: 0, not_attr: 15, explicit_val: 33,

            selectedGroup: null, selectedMulti: null,

        };

        //colorpicker
        this.onDrag = this.onDrag.bind(this);
        this.onDragRgb = this.onDragRgb.bind(this);
        this.onDragCust = this.onDragCust.bind(this);
        this.handleHor = this.handleHor.bind(this);

        // DatePicker
        this.handleDefault = this.handleDefault.bind(this);
        this.handleAutoClose = this.handleAutoClose.bind(this);
        this.handleStart = this.handleStart.bind(this);
        this.handleEnd = this.handleEnd.bind(this);
        this.handleMonthChange = this.handleMonthChange.bind(this);
        this.handleYearChange = this.handleYearChange.bind(this);

        // Bootsrap Maxlength
        this.threshholdchange = this.threshholdchange.bind(this);
        this.threshholdDefault = this.threshholdDefault.bind(this);
        this.optionchange = this.optionchange.bind(this);
        this.placementchange = this.placementchange.bind(this);
        this.textareachange = this.textareachange.bind(this);

        this.handleSelectGroup = this.handleSelectGroup.bind(this);
        this.handleMulti = this.handleMulti.bind(this);
    }

    //Color Picker
    onDrag(c1) {
        this.setState({ color: c1 });
    }
    onDragRgb(c1) {
        this.setState({ colorRgb: c1 });
    }
    onDragCust(c1) {
        this.setState({ colorCust: c1 });
    }
    handleHor = (color) => {
        this.setState({ colorHor: color.hex });
    };

    //DatePicker
    handleDefault(date) {
        this.setState({ default_date: date });
    }
    handleAutoClose(date) {
        this.setState({ auto_close: date });
    }
    handleStart(date) {
        this.setState({ start_date: date });
    }
    handleEnd(date) {
        this.setState({ end_date: date });
    }
    handleMonthChange(date) {
        this.setState({ monthDate: date });
    }
    handleYearChange(date) {
        this.setState({ yearDate: date });
    }

    //Bootstrap Maxlength   
    threshholdchange(event) {
        var count = event.target.value.length;
        if (count > 0) { this.setState({ disthresh: true }); } else { this.setState({ disthresh: false }); }
        this.setState({ threshholdcount: event.target.value.length });
    }

    threshholdDefault(event) {
        var count = event.target.value.length;
        if (count > 0) { this.setState({ disDefault: true }); } else { this.setState({ disDefault: false }); }
        this.setState({ threshholdDefault: event.target.value.length });
    }

    optionchange(event) {
        var count = event.target.value.length;
        if (count > 0) { this.setState({ disbadge: true }); } else { this.setState({ disbadge: false }); }
        if (count > 24) { this.setState({ advanceclass: "badgecountextra" }); }
        else { this.setState({ advanceclass: "badgecount" }); }
        this.setState({ optioncount: event.target.value.length });
    }

    placementchange(event) {
        var count = event.target.value.length;
        if (count > 0) { this.setState({ placementbadge: true }); } else { this.setState({ placementbadge: false }); }
        this.setState({ placementcount: event.target.value.length });
    }

    textareachange(event) {
        var count = event.target.value.length;
        if (count > 0) { this.setState({ textareabadge: true }); } else { this.setState({ textareabadge: false }); }
        this.setState({ textcount: event.target.value.length });
    }

    //Select 
    handleSelectGroup = (selectedGroup) => {
        this.setState({ selectedGroup });
    }
    handleMulti = (selectedMulti) => {
        this.setState({ selectedMulti });
    }

    componentDidMount() {
        this.props.activateAuthLayout();
    }

    render() {
        const { selectedGroup } = this.state;
        const { selectedMulti } = this.state;

        const Offsymbol = props => {
            return (
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "100%",
                        fontSize: 12,
                        color: "#fff",
                        paddingRight: 2
                    }} > No
              </div>
            );
        };

        const OnSymbol = props => {
            return (
                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                    fontSize: 12,
                    color: "#fff",
                    paddingRight: 2
                }}> Yes
                </div>
            );
        }


        return (
            <React.Fragment>
                <Container fluid>
                    <div className="page-title-box">
                        <Row className="align-items-center">

                            <Col sm="6">
                                <h4 className="page-title">Form Advanced</h4>
                                <Breadcrumb>
                                    <BreadcrumbItem><Link to="#">Veltrix</Link></BreadcrumbItem>
                                    <BreadcrumbItem><Link to="#">Forms</Link></BreadcrumbItem>
                                    <BreadcrumbItem active>Form Advanced</BreadcrumbItem>
                                </Breadcrumb>
                            </Col>
                            <Col sm="6">

                                <div className="float-right d-none d-md-block">
                                    <Settingmenu />
                                </div>

                            </Col>
                        </Row>
                    </div>

                    <Row>
                        <Col lg="6">
                            <Card>
                                <CardBody>

                                    <h4 className="mt-0 header-title">Colorpicker</h4>
                                    <p className="text-muted m-b-30">Fancy and customizable colorpicker
                                            plugin for Twitter Bootstrap.</p>

                                    <Form action="#">
                                        <FormGroup>
                                            <Label>Simple input field</Label>
                                            <Input type="text" className="colorpicker-default" value={this.state.color} onClick={() => this.setState({ simple_color: !this.state.simple_color })} />
                                            {this.state.simple_color ?
                                                <ColorPicker saturationHeight={100} saturationWidth={100} value={this.state.color} onDrag={this.onDrag.bind(this)} />
                                                : null}
                                        </FormGroup>

                                        <FormGroup>
                                            <Label>Horizontal mode</Label>
                                            <Input type="text" onClick={() => this.setState({ simple_color2: !this.state.simple_color2 })} value={this.state.colorHor} />
                                            {this.state.simple_color2 ?
                                                <SketchPicker
                                                    color='#fff'
                                                    value={this.state.simple_color2}
                                                    width="160px"
                                                    onChangeComplete={this.handleHor} />
                                                : null}
                                        </FormGroup>

                                        <FormGroup className="mb-0">
                                            <Label>Customized widget size</Label>
                                            <Input type="text" className="colorpicker-large" value={this.state.colorCust} onClick={() => this.setState({ simple_color3: !this.state.simple_color3 })} />
                                            {this.state.simple_color3 ?
                                                <React.Fragment>
                                                    <ColorPicker saturationHeight={100} saturationWidth={100} value={this.state.colorCust} onDrag={this.onDragCust.bind(this)} />
                                                    <div style={{
                                                        backgroundColor: this.state.colorCust,
                                                        width: "140px",
                                                        padding: "5px"
                                                    }}></div>
                                                </React.Fragment>
                                                : null}
                                        </FormGroup>

                                    </Form>

                                </CardBody>
                            </Card>

                            <Card>
                                <CardBody>

                                    <h4 className="mt-0 header-title">Bootstrap MaxLength</h4>
                                    <p className="text-muted m-b-30">This plugin integrates by default with
                                        Twitter bootstrap using badges to display the maximum lenght of the
                                            field where the user is inserting text. </p>

                                    <Label>Default usage</Label>
                                    <p className="text-muted m-b-15">
                                        The badge will show up by default when the remaining chars are 10 or less:
                                        </p>
                                    <Input type="text" maxLength="25" name="defaultconfig" onChange={this.threshholdDefault} id="defaultconfig" />
                                    {this.state.disDefault ? <span className="badgecount">{this.state.threshholdDefault} / 25 </span> : null}

                                    <div className="m-t-20">
                                        <Label>Threshold value</Label>
                                        <p className="text-muted m-b-15">
                                            Do you want the badge to show up when there are 20 chars or less? Use the <code>threshold</code> option:
                                            </p>
                                        <Input type="text" maxLength="25" onChange={this.threshholdchange} name="thresholdconfig" id="thresholdconfig" />
                                        {this.state.disthresh ? <span className="badgecount">{this.state.threshholdcount} / 25 </span> : null}
                                    </div>

                                    <div className="m-t-20">
                                        <Label>All the options</Label>
                                        <p className="text-muted m-b-15">
                                            Please note: if the <code>alwaysShow</code> option is enabled, the <code>threshold</code> option is ignored.
                                            </p>
                                        <Input type="text" maxLength="25" onChange={this.optionchange} name="alloptions" id="alloptions" />
                                        {this.state.disbadge ? <span className="badgecount">You Types {this.state.optioncount} out of 25 chars available</span> : null}
                                    </div>

                                    <div className="m-t-20">
                                        <Label>Position</Label>
                                        <p className="text-muted m-b-15">
                                            All you need to do is specify the <code>placement</code> option, with one of those strings. If none
                                            is specified, the positioning will be defauted to 'bottom'.
                                            </p>
                                        <Input type="text" maxLength="25" onChange={this.placementchange} name="placement" id="placement" />
                                        {this.state.placementbadge ? <span style={{ float: "right" }} className="badgecount">{this.state.placementcount} / 25 </span> : null}
                                    </div>

                                    <div className="m-t-20">
                                        <Label>textareas</Label>
                                        <p className="text-muted m-b-15">
                                            Bootstrap maxlength supports textarea as well as inputs. Even on old IE.
                                            </p>
                                        <Input type="textarea" id="textarea" onChange={this.textareachange} maxLength="225" rows="3" placeholder="This textarea has a limit of 225 chars." />
                                        {this.state.textareabadge ? <span className="badgecount"> {this.state.textcount} / 225 </span> : null}
                                    </div>

                                </CardBody>
                            </Card>

                            <Card>
                                <CardBody>

                                    <h4 className="mt-0 header-title">React Switch</h4>
                                    <p className="text-muted m-b-30">Here are a few types of switches. </p>

                                    <div>
                                        <Switch
                                            uncheckedIcon={<Offsymbol />}
                                            checkedIcon={<OnSymbol />}
                                            onColor="#626ed4"
                                            onChange={() => this.setState({ switch1: !this.state.switch1 })}
                                            checked={this.state.switch1} />&nbsp;

                                        <Switch uncheckedIcon={<Offsymbol />}
                                            checkedIcon={<OnSymbol />} onColor="#a2a2a2"
                                            onChange={() => this.setState({ switch2: !this.state.switch2 })} checked={this.state.switch2} />&nbsp;
                                        <Switch uncheckedIcon={<Offsymbol />}
                                            checkedIcon={<OnSymbol />} onColor="#02a499"
                                            onChange={() => this.setState({ switch3: !this.state.switch3 })} checked={this.state.switch3} />&nbsp;
                                        <Switch uncheckedIcon={<Offsymbol />}
                                            checkedIcon={<OnSymbol />} onColor="#626ed4"
                                            onChange={() => this.setState({ switch4: !this.state.switch4 })} checked={this.state.switch4} />&nbsp;
                                        <Switch uncheckedIcon={<Offsymbol />}
                                            checkedIcon={<OnSymbol />} onColor="#02a499"
                                            onChange={() => this.setState({ switch5: !this.state.switch5 })} checked={this.state.switch5} />&nbsp;
                                        <Switch uncheckedIcon={<Offsymbol />}
                                            checkedIcon={<OnSymbol />} onColor="#38a4f8"
                                            onChange={() => this.setState({ switch6: !this.state.switch6 })} checked={this.state.switch6} />&nbsp;
                                        <Switch uncheckedIcon={<Offsymbol />}
                                            checkedIcon={<OnSymbol />} onColor="#f8b425"
                                            onChange={() => this.setState({ switch7: !this.state.switch7 })} checked={this.state.switch7} />&nbsp;
                                        <Switch uncheckedIcon={<Offsymbol />}
                                            checkedIcon={<OnSymbol />} onColor="#ec4561"
                                            onChange={() => this.setState({ switch8: !this.state.switch8 })} checked={this.state.switch8} />&nbsp;
                                        <Switch uncheckedIcon={<Offsymbol />}
                                            checkedIcon={<OnSymbol />} onColor="#2a3142"
                                            onChange={() => this.setState({ switch9: !this.state.switch9 })} checked={this.state.switch9} />

                                    </div>

                                </CardBody>
                            </Card>

                        </Col>

                        <Col lg="6">
                            <Card>
                                <CardBody>

                                    <h4 className="mt-0 header-title">React Datepicker</h4>
                                    <p className="text-muted m-b-30">Examples of twitter bootstrap datepicker.</p>

                                    <Form action="#">
                                        <FormGroup className="forminput">
                                            <Label>Default Functionality</Label>
                                            <InputGroup>
                                                <DatePicker
                                                    className="form-control"
                                                    selected={this.state.default_date}
                                                    onChange={this.handleDefault}
                                                />
                                            </InputGroup>

                                        </FormGroup>

                                        <FormGroup className="forminput">
                                            <Label>Month View</Label>
                                            <InputGroup>
                                                <DatePicker
                                                    selected={this.state.monthDate}
                                                    className="form-control"
                                                    onChange={this.handleMonthChange}
                                                    showMonthDropdown
                                                />
                                            </InputGroup>
                                        </FormGroup>

                                        <FormGroup className="forminput">
                                            <Label>Year View</Label>
                                            <InputGroup>
                                                <DatePicker
                                                    selected={this.state.yearDate}
                                                    className="form-control"
                                                    onChange={this.handleYearChange}
                                                    showYearDropdown
                                                />
                                            </InputGroup>
                                        </FormGroup>

                                        <FormGroup className="mb-0 forminput">
                                            <Label>Date Range</Label>
                                            <Row>
                                                <Col className="col-6 pr-0 data-range1">
                                                    <DatePicker
                                                        selected={this.state.start_date}
                                                        selectsStart
                                                        className="form-control"
                                                        startDate={this.state.start_date}
                                                        endDate={this.state.end_date}
                                                        onChange={this.handleStart}
                                                    />
                                                </Col>
                                                <Col className="col-6 pl-0 data-range2">
                                                    <DatePicker
                                                        selected={this.state.end_date}
                                                        selectsEnd
                                                        className="form-control"
                                                        startDate={this.state.start_date}
                                                        endDate={this.state.end_date}
                                                        onChange={this.handleEnd}
                                                    />
                                                </Col>
                                            </Row>
                                        </FormGroup>

                                    </Form>
                                </CardBody>
                            </Card>


                            <Card>
                                <CardBody>

                                    <h4 className="mt-0 header-title">Bootstrap TouchSpin</h4>
                                    <p className="text-muted m-b-30">A mobile and touch friendly input spinner component for Bootstrap</p>

                                    <Form>
                                        <FormGroup>
                                            <Label>Using data attributes</Label>
                                            <InputGroup>
                                                <div className="input-group-append" onClick={() => this.setState({ data_attr: this.state.data_attr - 1 })}>
                                                    <Button type="button" color="primary"><i className="mdi mdi-minus"></i></Button>
                                                </div>
                                                <input type="number" className="form-control" value={this.state.data_attr} placeholder="number" />
                                                <div className="input-group-append" onClick={() => this.setState({ data_attr: this.state.data_attr + 1 })}>
                                                    <Button type="button" color="primary"><i className="mdi mdi-plus"></i></Button>
                                                </div>
                                            </InputGroup>
                                        </FormGroup>
                                        <FormGroup>
                                            <Label>Example with postfix (large)</Label>
                                            <InputGroup>
                                                <div className="input-group-append" onClick={() => this.setState({ postfix: this.state.postfix - 1 })}>
                                                    <Button type="button" color="primary"><i className="mdi mdi-minus"></i></Button>
                                                </div>
                                                <input type="number" className="form-control" value={this.state.postfix} placeholder="number" />
                                                <div className="input-group-append">
                                                    <span className="input-group-text">%</span>
                                                    <Button type="button"  onClick={() => this.setState({ postfix: this.state.postfix + 1 })} color="primary"><i className="mdi mdi-plus"></i></Button>
                                                </div>
                                            </InputGroup>
                                        </FormGroup>
                                        <FormGroup>
                                            <Label>Init with empty value:</Label>
                                            <InputGroup>
                                                <div className="input-group-append" onClick={() => this.setState({ empty_val: this.state.empty_val - 1 })}>
                                                    <Button type="button" color="primary"><i className="mdi mdi-minus"></i></Button>
                                                </div>
                                                <input type="number" className="form-control" value={this.state.empty_val} placeholder="number" />
                                                <div className="input-group-append" onClick={() => this.setState({ empty_val: this.state.empty_val + 1 })}>
                                                    <Button type="button" color="primary"><i className="mdi mdi-plus"></i></Button>
                                                </div>
                                            </InputGroup>
                                        </FormGroup>
                                        <FormGroup>
                                            <Label>Value attribute is not set (applying settings.initval)</Label>
                                            <InputGroup>
                                                <div className="input-group-append" onClick={() => this.setState({ not_attr: this.state.not_attr - 1 })}>
                                                    <Button type="button" color="primary"><i className="mdi mdi-minus"></i></Button>
                                                </div>
                                                <input type="number" className="form-control" value={this.state.not_attr} placeholder="number" />
                                                <div className="input-group-append" onClick={() => this.setState({ not_attr: this.state.not_attr + 1 })}>
                                                    <Button type="button" color="primary"><i className="mdi mdi-plus"></i></Button>
                                                </div>
                                            </InputGroup>
                                        </FormGroup>
                                        <FormGroup className="mb-0">
                                            <Label>Value is set explicitly to 33 (skipping settings.initval) </Label>
                                            <InputGroup>
                                                <div className="input-group-append" onClick={() => this.setState({ explicit_val: this.state.explicit_val - 1 })}>
                                                    <Button type="button" color="primary"><i className="mdi mdi-minus"></i></Button>
                                                </div>
                                                <input type="number" className="form-control" value={this.state.explicit_val} placeholder="number" />
                                                <div className="input-group-append" onClick={() => this.setState({ explicit_val: this.state.explicit_val + 1 })}>
                                                    <Button type="button" color="primary"><i className="mdi mdi-plus"></i></Button>
                                                </div>
                                            </InputGroup>
                                        </FormGroup>

                                    </Form>

                                </CardBody>
                            </Card>


                            <Card>
                                <CardBody>

                                    <h4 className="mt-0 header-title">Select2</h4>
                                    <p className="text-muted m-b-30">A mobile and touch friendly input spinner component for Bootstrap</p>

                                    <Form>
                                        <FormGroup>
                                            <Label>Single Select</Label>
                                            <Select
                                                value={selectedGroup}
                                                onChange={this.handleSelectGroup}
                                                options={optionGroup}
                                            />
                                        </FormGroup>
                                        <FormGroup className="mb-0">
                                            <Label>Multiple Select</Label>

                                            {/* <select className="select2 form-control select2-multiple" multiple="multiple" multiple data-placeholder="Choose ...">
                                                <optgroup label="Alaskan/Hawaiian Time Zone">
                                                    <option value="AK">Alaska</option>
                                                    <option value="HI">Hawaii</option>
                                                </optgroup>
                                                <optgroup label="Pacific Time Zone">
                                                    <option value="CA">California</option>
                                                    <option value="NV">Nevada</option>
                                                    <option value="OR">Oregon</option>
                                                    <option value="WA">Washington</option>
                                                </optgroup>
                                                <optgroup label="Mountain Time Zone">
                                                    <option value="AZ">Arizona</option>
                                                    <option value="CO">Colorado</option>
                                                    <option value="ID">Idaho</option>
                                                    <option value="MT">Montana</option>
                                                    <option value="NE">Nebraska</option>
                                                    <option value="NM">New Mexico</option>
                                                    <option value="ND">North Dakota</option>
                                                    <option value="UT">Utah</option>
                                                    <option value="WY">Wyoming</option>
                                                </optgroup>
                                                <optgroup label="Central Time Zone">
                                                    <option value="AL">Alabama</option>
                                                    <option value="AR">Arkansas</option>
                                                    <option value="IL">Illinois</option>
                                                    <option value="IA">Iowa</option>
                                                    <option value="KS">Kansas</option>
                                                    <option value="KY">Kentucky</option>
                                                    <option value="LA">Louisiana</option>
                                                    <option value="MN">Minnesota</option>
                                                    <option value="MS">Mississippi</option>
                                                    <option value="MO">Missouri</option>
                                                    <option value="OK">Oklahoma</option>
                                                    <option value="SD">South Dakota</option>
                                                    <option value="TX">Texas</option>
                                                    <option value="TN">Tennessee</option>
                                                    <option value="WI">Wisconsin</option>
                                                </optgroup>
                                                <optgroup label="Eastern Time Zone">
                                                    <option value="CT">Connecticut</option>
                                                    <option value="DE">Delaware</option>
                                                    <option value="FL">Florida</option>
                                                    <option value="GA">Georgia</option>
                                                    <option value="IN">Indiana</option>
                                                    <option value="ME">Maine</option>
                                                    <option value="MD">Maryland</option>
                                                    <option value="MA">Massachusetts</option>
                                                    <option value="MI">Michigan</option>
                                                    <option value="NH">New Hampshire</option>
                                                    <option value="NJ">New Jersey</option>
                                                    <option value="NY">New York</option>
                                                    <option value="NC">North Carolina</option>
                                                    <option value="OH">Ohio</option>
                                                    <option value="PA">Pennsylvania</option>
                                                    <option value="RI">Rhode Island</option>
                                                    <option value="SC">South Carolina</option>
                                                    <option value="VT">Vermont</option>
                                                    <option value="VA">Virginia</option>
                                                    <option value="WV">West Virginia</option>
                                                </optgroup>
                                            </select> */}
                                            <Select
                                                value={selectedMulti}
                                                isMulti={true}
                                                onChange={this.handleMulti}
                                                options={optionGroup}
                                            />
                                        </FormGroup>
                                    </Form>
                                </CardBody>
                            </Card>

                           

                        </Col>
                    </Row>

                </Container>
            </React.Fragment >
        );
    }
}

export default withRouter(connect(null, { activateAuthLayout })(FormAdvanced));