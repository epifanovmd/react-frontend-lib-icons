import React, { FC, memo } from 'react';
import EjectOutlineSvg from '../svg/eject-outline.svg';

export interface IEjectOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const EjectOutlineIcon: FC<IEjectOutlineIconProps> = memo(props => {
  return <EjectOutlineSvg {...props} />;
});
