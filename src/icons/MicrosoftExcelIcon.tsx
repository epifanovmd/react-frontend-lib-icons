import React, { FC, memo } from 'react';
import MicrosoftExcelSvg from '../svg/microsoft-excel.svg';

export interface IMicrosoftExcelIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MicrosoftExcelIcon: FC<IMicrosoftExcelIconProps> = memo(props => {
  return <MicrosoftExcelSvg {...props} />;
});
