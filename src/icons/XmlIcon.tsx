import React, { FC, memo } from 'react';
import XmlSvg from '../svg/xml.svg';

export interface IXmlIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const XmlIcon: FC<IXmlIconProps> = memo(props => {
  return <XmlSvg {...props} />;
});
