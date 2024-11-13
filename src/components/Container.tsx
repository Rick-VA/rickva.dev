import * as data from '../content';
import SelectableItem from './SelectableItem';
import SelectableItemMultiple from './SelectableItemMultiple';

export default function Container() {

    return (
        <div class="mx-auto pb-4 flex flex-col items-center">
            <SelectableItem id={1} content={data.about} title='Over' icon='bi bi-file-person-fill' />
            <SelectableItemMultiple id={2} content='work' title='Werkervaring' icon='bi bi-briefcase-fill'/>
            <SelectableItemMultiple id={3} content='projects' title='Projecten' icon='bi bi-wrench'/>
            <SelectableItemMultiple id={4} content='educations' title='Opleiding' icon='bi bi-mortarboard-fill' />
            <SelectableItemMultiple id={5} content='contact' title='Contact' icon='bi bi-person-lines-fill' />
        </div>
    );
}
