import React, { useState, useEffect } from 'react';
import {
  Field,
  Form,
  Input,
  Button,
  Checkbox,
  Radio,
  Card,
  Pagination,
} from 'antd';
import SkeletonButton from 'antd/lib/skeleton/Button';
// import { SearchPagination } from './SearchPagination.js';
import { getGroomerData } from '../../../api/index';

const cardDescription = {
  margin: '1px',
};
const demo = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const { Meta } = Card;
// function itemRender (current, type, originalElement) {
//   if (type === 'prev') {
//     return <a>Previous</a>;
//   }
//   if (type === 'next') {
//     return <a>Next</a>;
//   }
//   return originalElement;
// }

// const onChange = e => {
//   console.log('radio checked', e.target.value);
//   this.setState({
//     value: e.target.value,
//   });
// };

const SearchForm = () => {
  const [name, setName] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [groomers, setGroomers] = useState([]);

  const onFinish = values => {
    console.log('Success: groomers displayed', values);
  };

  const onFinishFailed = errorInfo => {
    console.log('Unable to retrieve data:', errorInfo);
  };
  const handleName = e => setName(e.target.value);
  const handleZipCode = e => setZipcode(e.target.value);
  const onSubmit = e => {
    e.preventDefault();
    console.log(name, zipcode);
  };

  useEffect(() => {
    getGroomerData().then(response => {
      setGroomers(response);
    });
  }, []);

  console.log(groomers);

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', margin: '10px' }}>
      {groomers.map(groomer => {
        return (
          <Card
            hoverable
            style={{
              width: 240,
              margin: '10px',
            }}
            cover={<img alt="example" src={groomer.photo_url} />}
          >
            <Meta title={groomer.name + ' ' + groomer.lastname}></Meta>
            <div
              style={{
                marginBottom: '1px',
              }}
            >
              <p style={cardDescription}>
                Vet Visit Rate: ${groomer.vet_visit_rate}
              </p>
              <p style={cardDescription}>
                Day Care Rate: ${groomer.day_care_rate}
              </p>
              <p style={cardDescription}>Walk Rate: ${groomer.walk_rate}</p>
              <p style={cardDescription}>Address: {groomer.address}</p>
              <p style={cardDescription}>
                {groomer.city}, {groomer.state} {groomer.zip}
              </p>
              <p style={cardDescription}>{groomer.country}</p>
            </div>
          </Card>
        );
      })}
    </div>

    // <Form
    //   {...SearchForm}
    //   name="basic"
    //   initialValues={{
    //     remember: true,
    //   }}
    //   onFinish={onFinish}
    //   onFinishFailed={onFinishFailed}
    // >
    //   <Form.Item
    //     label="Pet's Name"
    //     name="petsName"
    //     rules={[
    //       {
    //         required: true,
    //         message: 'What is your pets name?',
    //       },
    //     ]}
    //   >
    //     <Input onChange={handleName} />
    //   </Form.Item>

    //   <Radio.Group>
    //     {/* onChange={onChange} */}
    //     <h3>I have a:</h3>
    //     <Radio value={1}>Dog</Radio>
    //     <Radio value={2}>Cat</Radio>
    //   </Radio.Group>

    //   <Form.Item
    //     label="Enter zip or postal code:"
    //     name="zipcode"
    //     rules={[
    //       {
    //         required: true,
    //         message: 'Please input your zipcode!',
    //       },
    //     ]}
    //   >
    //     <Input onChange={handleZipCode} />
    //   </Form.Item>

    //   <Form.Item {...tailLayout} name="remember" valuePropName="checked">
    //     <Checkbox>Remember me</Checkbox>
    //   </Form.Item>

    //   <Form.Item {...tailLayout}>
    //     <Button onClick={onSubmit} type="primary" htmlType="submit">
    //       Find Your Groomers
    //     </Button>
    //   </Form.Item>
    //   {/* <SearchPagination /> */}

    //   <Card
    //     hoverable
    //     style={{width: 240}}
    //     cover={
    //       <img
    //         alt="example"
    //         src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
    //       />
    //     }
    //   >
    //     <Meta title="K-9 Whisperer" description="www.expressgroomers.com" />
    //   </Card>
    //   {/* <Pagination total={100} itemRender={itemRender} /> */}
    // </Form>
    // // <SearchPagination/>
  );
};
export default SearchForm;
