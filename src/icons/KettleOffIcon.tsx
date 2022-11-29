import React, { FC, memo } from 'react';
import KettleOffSvg from '../svg/kettle-off.svg';

export interface IKettleOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const KettleOffIcon: FC<IKettleOffIconProps> = memo(props => {
  return <KettleOffSvg {...props} />;
});
