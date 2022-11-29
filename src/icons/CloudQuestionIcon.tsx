import React, { FC, memo } from 'react';
import CloudQuestionSvg from '../svg/cloud-question.svg';

export interface ICloudQuestionIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CloudQuestionIcon: FC<ICloudQuestionIconProps> = memo(props => {
  return <CloudQuestionSvg {...props} />;
});
