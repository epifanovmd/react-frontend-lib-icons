import React, { FC, memo } from 'react';
import KitesurfingSvg from '../svg/kitesurfing.svg';

export interface IKitesurfingIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const KitesurfingIcon: FC<IKitesurfingIconProps> = memo(props => {
  return <KitesurfingSvg {...props} />;
});
