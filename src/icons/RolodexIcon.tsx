import React, { FC, memo } from 'react';
import RolodexSvg from '../svg/rolodex.svg';

export interface IRolodexIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const RolodexIcon: FC<IRolodexIconProps> = memo(props => {
  return <RolodexSvg {...props} />;
});
