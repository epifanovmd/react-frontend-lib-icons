import React, { FC, memo } from 'react';
import WordpressSvg from '../svg/wordpress.svg';

export interface IWordpressIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WordpressIcon: FC<IWordpressIconProps> = memo(props => {
  return <WordpressSvg {...props} />;
});
