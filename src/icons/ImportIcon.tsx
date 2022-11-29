import React, { FC, memo } from 'react';
import ImportSvg from '../svg/import.svg';

export interface IImportIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ImportIcon: FC<IImportIconProps> = memo(props => {
  return <ImportSvg {...props} />;
});
