import React, { FC, memo } from 'react';
import CloudQuestionOutlineSvg from '../svg/cloud-question-outline.svg';

export interface ICloudQuestionOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CloudQuestionOutlineIcon: FC<ICloudQuestionOutlineIconProps> = memo(props => {
  return <CloudQuestionOutlineSvg {...props} />;
});
