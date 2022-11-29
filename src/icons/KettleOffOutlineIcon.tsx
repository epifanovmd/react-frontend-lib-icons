import React, { FC, memo } from 'react';
import KettleOffOutlineSvg from '../svg/kettle-off-outline.svg';

export interface IKettleOffOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const KettleOffOutlineIcon: FC<IKettleOffOutlineIconProps> = memo(props => {
  return <KettleOffOutlineSvg {...props} />;
});
