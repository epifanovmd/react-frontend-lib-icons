import React, { FC, memo } from 'react';
import WardrobeSvg from '../svg/wardrobe.svg';

export interface IWardrobeIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WardrobeIcon: FC<IWardrobeIconProps> = memo(props => {
  return <WardrobeSvg {...props} />;
});
