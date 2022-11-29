import React, { FC, memo } from 'react';
import CreativeCommonsSvg from '../svg/creative-commons.svg';

export interface ICreativeCommonsIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CreativeCommonsIcon: FC<ICreativeCommonsIconProps> = memo(props => {
  return <CreativeCommonsSvg {...props} />;
});
