import React, { FC, memo } from 'react';
import KettleOutlineSvg from '../svg/kettle-outline.svg';

export interface IKettleOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const KettleOutlineIcon: FC<IKettleOutlineIconProps> = memo(props => {
  return <KettleOutlineSvg {...props} />;
});
