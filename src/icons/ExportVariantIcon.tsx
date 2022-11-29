import React, { FC, memo } from 'react';
import ExportVariantSvg from '../svg/export-variant.svg';

export interface IExportVariantIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ExportVariantIcon: FC<IExportVariantIconProps> = memo(props => {
  return <ExportVariantSvg {...props} />;
});
