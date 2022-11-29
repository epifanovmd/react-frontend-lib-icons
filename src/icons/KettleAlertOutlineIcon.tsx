import React, { FC, memo } from 'react';
import KettleAlertOutlineSvg from '../svg/kettle-alert-outline.svg';

export interface IKettleAlertOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const KettleAlertOutlineIcon: FC<IKettleAlertOutlineIconProps> = memo(props => {
  return <KettleAlertOutlineSvg {...props} />;
});
