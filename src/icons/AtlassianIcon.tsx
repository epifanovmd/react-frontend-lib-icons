import React, { FC, memo } from 'react';
import AtlassianSvg from '../svg/atlassian.svg';

export interface IAtlassianIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AtlassianIcon: FC<IAtlassianIconProps> = memo(props => {
  return <AtlassianSvg {...props} />;
});
