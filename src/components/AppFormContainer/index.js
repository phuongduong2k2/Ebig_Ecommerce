import React, {useEffect, useRef, useState} from 'react';
import {useForm} from 'react-hook-form';
import {Button, FlatList, Text, View} from 'react-native';
import PropTypes from 'prop-types';
import {InputType} from '../../constants/constants';
import CustomTextInputChoice from '../CustomTextInputChoice';

AppFormContainer.propTypes = {
  onSubmitting: PropTypes.func,
  fields: PropTypes.arrayOf(PropTypes.object),
  customSubmitButton: PropTypes.func,
  onChangeForm: PropTypes.func,
};

AppFormContainer.defaultProps = {
  onSubmitting: () => {},
  fields: [{}],
  customSubmitButton: () => {},
  onChangeForm: () => {},
};

const dataApi = [
  {
    id: 1,
    label: 'Câu 1: Ông/Bà có hút thuốc lá không?',
    options: [
      {
        type: InputType.textInput,
        label: 'Số lượng sdfasdfThuốc lá hút mỗi ngày',
        rules: {required: {value: true, message: 'This field is required'}},
      },
    ],
  },
  {
    id: 2,
    label: 'Câu 2: Ông/Bà có sử dụng rượu, bia không?',
    options: [
      {
        type: InputType.textInput,
        label: 'Rượu',
        rules: {
          required: {value: true, message: 'This field is required'},
          minLength: {value: 10, message: 'Tối thiểu 10 ký tự'},
        },
      },
      {
        type: InputType.textInput,
        label: 'Bia',
        rules: {
          required: {value: true, message: 'This field is required'},
          minLength: {value: 10, message: 'Tối thiểu 10 ký tự'},
        },
      },
    ],
  },
  {
    id: 3,
    label:
      'Câu 5: Trong 5 năm vừa qua, Ông/Bà có khám bệnh hay điều trị bệnh ở bệnh viện, cơ sở y tế hay bác sĩ nào không?',
    options: [
      {
        type: InputType.textInput,
        label: 'Triệu chứng',
        rules: {required: {value: true, message: 'This field is required'}},
      },
      {
        type: InputType.textInput,
        isCombo: true,
        fields: [
          {
            label: 'Chuẩn đoán',
            rules: {required: {value: true, message: 'This field is required'}},
          },
          {
            label: 'Chuẩn đoán',
            rules: {required: {value: true, message: 'This field is required'}},
          },
        ],
        label: 'Chuẩn đoán và thời gian điều trị',
        rules: {required: {value: true, message: 'This field is required'}},
      },
    ],
  },
  {
    id: 4,
    label: 'Câu 4:',
    options: [
      {
        type: InputType.textInput,
        label: 'Ông/Bà ghi chi tiết: đã điều trị bệnh gì? Năm điều trị?',
        rules: {required: {value: true, message: 'This field is required'}},
      },
      {
        type: InputType.radio,
        label: 'Ông/Bà có hồ sơ sức khỏe không?',
        fields: ['Có HSSK', 'Không có HSSK'],
        rules: {required: {value: true, message: 'This field is required'}},
      },
    ],
  },
  {
    id: 5,
    label: 'Câu 1: Ông/BàASDASD có hút thuASFDốc lá không?',
    options: [
      {
        type: InputType.textInput,
        label: 'Số lượng Thuốc lá hút zxcmỗi ngày',
        rules: {required: {value: true, message: 'This field is required'}},
      },
    ],
  },
  {
    id: 6,
    label: 'Câu 1: Ông/Bà cóADASDAD hút thuốc lá không?',
    options: [
      {
        type: InputType.textInput,
        label: 'Số lượngqwe Thuốc lá hút mỗi ngày',
        rules: {required: {value: true, message: 'This field is required'}},
      },
    ],
  },
  {
    id: 7,
    label: 'Câu 1: Ông/BàASDASD có hút thuốc lá không?',
    options: [
      {
        type: InputType.textInput,
        label: 'Số lượng Thuốc lá hút brtmỗi ngày',
        rules: {required: {value: true, message: 'This field is required'}},
      },
    ],
  },
  {
    id: 8,
    label: 'Câu 1: Ông/BADSASDà có hút thuốc lá không?',
    options: [
      {
        type: InputType.textInput,
        label: 'Số lượng Thuốc lá húqwet mỗi ngày',
        rules: {required: {value: true, message: 'This field is required'}},
      },
    ],
  },
  {
    id: 9,
    label: 'Câu 1: Ông/Bà có hút thaSDuốc lá không?',
    options: [
      {
        type: InputType.textInput,
        label: 'Số lượng Thuốc lá hút iummỗi ngày',
        rules: {required: {value: true, message: 'This field is required'}},
      },
    ],
  },
  {
    id: 10,
    label: 'Câu 1: Ông/Bà có hút thASDASD aSDuốc lá không?',
    options: [
      {
        type: InputType.textInput,
        label: 'Số lượng Thuốc lá hútewtw mỗi ngày',
        rules: {required: {value: true, message: 'This field is required'}},
      },
    ],
  },
  {
    id: 11,
    label: 'Câu 1: Ông/ASDASDQQWBà có hút thaSDuốc lá không?',
    options: [
      {
        type: InputType.textInput,
        label: 'Số lượng Thuốc lá hút gsfbmỗi ngày',
        rules: {required: {value: true, message: 'This field is required'}},
      },
    ],
  },
  {
    id: 12,
    label: 'Câu 1: Ông/Bà có hútQWCCA thaSDuốc lá không?',
    options: [
      {
        type: InputType.textInput,
        label: 'Số lượng Thuốc lá hút jutyhnmỗi ngày',
        rules: {required: {value: true, message: 'This field is required'}},
      },
    ],
  },
];

function AppFormContainer(props) {
  const {
    children,
    onSubmitting,
    fields,
    customSubmitButton,
    onChangeForm,
    onScroll,
  } = props;

  const {
    control,
    resetField,
    handleSubmit,
    formState: {errors},
  } = useForm({});

  const onSubmit = data => onSubmitting(data);

  const scrollToError = () => {
    const arrErr = Object.keys(errors);
    let index = -1;
    for (let i = 0; i < dataApi.length; i++) {
      if (
        arrErr.includes(dataApi[i].label) ||
        dataApi[i].options.some(item => arrErr.includes(item.label))
      ) {
        index = i;
        break;
      }
    }
    if (index !== -1) {
      flastListRef.current.scrollToIndex({
        animated: true,
        index: index,
      });
    }
  };

  useEffect(() => {
    scrollToError();
  }, [errors]);

  const flastListRef = useRef(null);

  return (
    <View style={{flex: 1}}>
      {/* {_renderContent(errors)} */}
      <FlatList
        ref={flastListRef}
        data={dataApi}
        showsVerticalScrollIndicator={false}
        renderItem={({item, index}) => (
          <CustomTextInputChoice
            data={item}
            control={control}
            onReset={resetField}
            onChangeText={onChangeForm}
            errors={errors}
          />
        )}
        keyExtractor={(item, index) => item.label}
        ListFooterComponent={() => (
          <View>
            <Button
              title="Submit"
              onPress={() => {
                handleSubmit(onSubmit, scrollToError)();
              }}
            />
            <Button
              title="eror"
              onPress={() => {
                console.log(errors);
              }}
            />
          </View>
        )}
      />
    </View>
  );
}

export default AppFormContainer;
