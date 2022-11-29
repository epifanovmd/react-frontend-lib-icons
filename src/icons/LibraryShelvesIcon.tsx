import React, { FC, memo } from 'react';
import LibraryShelvesSvg from '../svg/library-shelves.svg';

export interface ILibraryShelvesIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LibraryShelvesIcon: FC<ILibraryShelvesIconProps> = memo(props => {
  return <LibraryShelvesSvg {...props} />;
});
