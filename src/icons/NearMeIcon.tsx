import React, { FC, memo } from 'react';
import NearMeSvg from '../svg/near-me.svg';

export interface INearMeIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const NearMeIcon: FC<INearMeIconProps> = memo(props => {
  return <NearMeSvg {...props} />;
});
