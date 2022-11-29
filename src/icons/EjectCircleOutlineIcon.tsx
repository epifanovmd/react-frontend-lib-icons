import React, { FC, memo } from 'react';
import EjectCircleOutlineSvg from '../svg/eject-circle-outline.svg';

export interface IEjectCircleOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const EjectCircleOutlineIcon: FC<IEjectCircleOutlineIconProps> = memo(props => {
  return <EjectCircleOutlineSvg {...props} />;
});
