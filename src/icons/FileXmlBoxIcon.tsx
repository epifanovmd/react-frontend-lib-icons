import React, { FC, memo } from 'react';
import FileXmlBoxSvg from '../svg/file-xml-box.svg';

export interface IFileXmlBoxIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FileXmlBoxIcon: FC<IFileXmlBoxIconProps> = memo(props => {
  return <FileXmlBoxSvg {...props} />;
});
