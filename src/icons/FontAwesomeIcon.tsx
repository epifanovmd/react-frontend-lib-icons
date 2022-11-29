import React, { FC, memo } from 'react';
import FontAwesomeSvg from '../svg/font-awesome.svg';

export interface IFontAwesomeIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FontAwesomeIcon: FC<IFontAwesomeIconProps> = memo(props => {
  return <FontAwesomeSvg {...props} />;
});
