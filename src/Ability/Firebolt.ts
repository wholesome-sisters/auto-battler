import AttackType from '../AttackType';
import DebuffId from '../StatusEffect/DebuffId';
import Ability from './Ability';

const NAME = 'Firebolt';
const SPELLPOWER_RATIO = 0.34;

const Firebolt: Ability = {
    name: NAME,
    description: 'Attack your target and apply Burn.',
    func: (char) => {
        if (!char.battle) return;
        char.setTarget();
        if (char.target) {
            char.useMana();
            const hit = char.attack({
                target: char.target,
                attackType: AttackType.Spell,
                damageRange: char.mainHand.damageRange,
                spellPowerRatio: SPELLPOWER_RATIO,
                isOffHand: false,
                abilityName: NAME
            });

            if (hit) {
                char.target.statusEffectManager.addDebuff(DebuffId.Burn, char, 2);
            }
        }
    }
};

export default Firebolt;