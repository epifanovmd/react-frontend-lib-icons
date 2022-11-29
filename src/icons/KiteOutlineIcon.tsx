import React, { FC, memo } from 'react';
import KiteOutlineSvg from '../svg/kite-outline.svg';

export interface IKiteOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const KiteOutlineIcon: FC<IKiteOutlineIconProps> = memo(props => {
  return <KiteOutlineSvg {...props} />;
});
