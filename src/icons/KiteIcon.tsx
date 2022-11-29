import React, { FC, memo } from 'react';
import KiteSvg from '../svg/kite.svg';

export interface IKiteIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const KiteIcon: FC<IKiteIconProps> = memo(props => {
  return <KiteSvg {...props} />;
});
