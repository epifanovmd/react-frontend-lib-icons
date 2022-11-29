import React, { FC, memo } from 'react';
import AwsSvg from '../svg/aws.svg';

export interface IAwsIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AwsIcon: FC<IAwsIconProps> = memo(props => {
  return <AwsSvg {...props} />;
});
