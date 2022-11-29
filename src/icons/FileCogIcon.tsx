import React, { FC, memo } from 'react';
import FileCogSvg from '../svg/file-cog.svg';

export interface IFileCogIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FileCogIcon: FC<IFileCogIconProps> = memo(props => {
  return <FileCogSvg {...props} />;
});
